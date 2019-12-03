import Base from './Base';
import constants from '../constants/constants';
import RequestMethods from '../constants/RequestMethods';
import General from './General';
import Tb from './Tb';
import Maternal from './maternal';
import Dental from './Dental';
import Immunation from './Immunation';

export default class Family extends Base {
	async fetchAll() {
		return this.sendRequest(constants.PATIENTS, RequestMethods.GET, {});
	}

	async fetch(id) {
		return this.sendRequest(`${constants.PATIENTS}/${id}`, RequestMethods.GET, {});
	}

	async create(data) {
		return this.sendRequest(constants.PATIENTS, RequestMethods.POST, data);
	}

	async destroy(id) {
		console.log('deleted patient id: ' + id);
		let general = (await new General().fetchAll()).data.data;
		let tb = (await new Tb().fetchAll()).data.data;
		let maternal = (await new Maternal().fetchAll()).data.data;
		let dental = (await new Dental().fetchAll()).data.data;
		let immunation = (await new Immunation().fetchAll()).data.data;

		console.log({ general, tb, maternal, dental, immunation });

		general = general.filter((g) => {
			return g.patient_id == id;
		});
		tb = tb.filter((g) => {
			return g.patient_id == id;
		});
		maternal = maternal.filter((g) => {
			return g.patient_id == id;
		});
		dental = dental.filter((g) => {
			return g.patient_id == id;
		});
		immunation = immunation.filter((g) => {
			return g.patient_id == id;
		});

		console.log({ general, tb, maternal, dental, immunation });

    await general.map(async(g) => {
      await new General().destroy(g.id)
    })
    await tb.map(async(g) => {
      await new Tb().destroy(g.id)
    })
    await maternal.map(async(g) => {
      await new Maternal().destroy(g.id)
    })
    await dental.map(async(g) => {
      await new Dental().destroy(g.id)
    })
    await immunation.map(async(g) => {
      await new Immunation().destroy(g.id)
    })

		return this.sendRequest(`${constants.PATIENTS}/${id}` ,RequestMethods.DELETE)
	}

	async update(data) {
		console.log(data, 'this is data');
		return this.sendRequest(`${constants.PATIENTS}/${data.id}`, RequestMethods.PATCH, data);
	}
}
