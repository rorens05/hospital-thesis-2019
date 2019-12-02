import React, { Component } from 'react';
import Navbar from './../dashboard/Navbar';
import Sidebar from './../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn } from 'mdbreact';
import images from '../../../constants/images';
import General from '../../../api_connections/General';
import Maternal from '../../../api_connections/maternal';
import Tb from '../../../api_connections/Tb';
import Immunation from '../../../api_connections/Immunation';
import Dental from '../../../api_connections/Dental';

import Family from '../../../api_connections/Family';
import Patient from '../../../api_connections/Patient';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
			]
		};
	}

	componentDidMount = async () => {
		let generalRes = (await new General().fetchAll()).data.data;
		let maternalRes = (await new Maternal().fetchAll()).data.data;
		let tbRes = (await new Tb().fetchAll()).data.data;
		let immunationRes = (await new Immunation().fetchAll()).data.data;
		let dentalRes = (await new Dental().fetchAll()).data.data;
		let familyRes = (await new Family().fetchAll()).data.data;
		let patientRes = (await new Patient().fetchAll()).data.data;

		console.log({ generalRes, maternalRes, tbRes, immunationRes, dentalRes, familyRes, patientRes });
  
    let data = []

    generalRes.map(g => {
      let patient = this.getPatient(patientRes, g.patient_id);
      data.push({
        family_no: this.getSerialNumber(familyRes, patient.family_id).serial_number,
        name: patient.first_name + " " + patient.last_name,
        mode: g.mode,
        type: 'GENERAL',
        nature: g.nature_of_visit,
        date: g.date_of_consultation
      })
    })

    dentalRes.map(g => {
      let patient = this.getPatient(patientRes, g.patient_id);
      data.push({
        family_no: this.getSerialNumber(familyRes, patient.family_id).serial_number,
        name: patient.first_name + " " + patient.last_name,
        mode: g.mode,
        type: 'DENTAL',
        nature: g.nature,
        date: g.createdAt
      })
    })

    immunationRes.map(g => {
      let patient = this.getPatient(patientRes, g.patient_id);
      data.push({
        family_no: this.getSerialNumber(familyRes, patient.family_id).serial_number,
        name: patient.first_name + " " + patient.last_name,
        mode: "Walk-in",
        type: 'IMMUNIZATION',
        nature: "New Consultation",
        date: g.createdAt
      })
    })

    tbRes.map(g => {
      let patient = this.getPatient(patientRes, g.patient_id);
      data.push({
        family_no: this.getSerialNumber(familyRes, patient.family_id).serial_number,
        name: patient.first_name + " " + patient.last_name,
        mode: "Walk-in",
        type: 'TB',
        nature: g.source,
        date: g.createdAt
      })
    })

    maternalRes.map(g => {
      let patient = this.getPatient(patientRes, g.patient_id);
      data.push({
        family_no: this.getSerialNumber(familyRes, patient.family_id).serial_number,
        name: patient.first_name + " " + patient.last_name,
        mode: g.type_of_delivery,
        type: 'MATERNAL',
        nature: g.birth_outcome,
        date: g.diagnosis_date
      })
    })

    console.log(data)
    data = data.sort((a, b) => {
      console.log({a, b, date: new Date(a.date) > new Date(b.date)})
      if(new Date(a.date) > new Date(b.date)){
        return -1
      }else{
        return 1
      }
    })
    this.setState({data})
  };

  getPatient = (patients, id) => {
    let patient = {}
    patients.map(p => {
      if(p.id == id){
        patient = p
      }
    })

    return patient
  }

  getSerialNumber = (families, id = 0) => {
    let family = {}
    console.log({families, id})

    families.map(f => {
      if(f.id == id){
        family = f
      }
    })
    return family
  }

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar treatment />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.TREATMENT_ICON} alt='tb' className='pageIcon' />
								Treatment Record
								{/* <MDBBtn 
                  size="sm" 
                  className="float-right"
                  color="primary"
                  onClick={() => window.location.href = "/treatment/tb/new"}
                  >Add new record</MDBBtn> */}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.data.length} records</p>
							<Table data={this.state.data}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
