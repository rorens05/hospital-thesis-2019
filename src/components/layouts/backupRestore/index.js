import React, { Component } from 'react';
import Navbar from './../dashboard/Navbar';
import Sidebar from './../dashboard/Sidebar';
import { MDBContainer, MDBBtn } from 'mdbreact';
import CsvDownload from 'react-json-to-csv';

import General from '../../../api_connections/General';
import Maternal from '../../../api_connections/maternal';
import Tb from '../../../api_connections/Tb';
import Immunation from '../../../api_connections/Immunation';
import Dental from '../../../api_connections/Dental';
import Patient from '../../../api_connections/Patient';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
      general: [],
			maternal: [],
			tuberculosis: [],
			immunation: [],
			dental: [],
			patient: []
		};
	}

	componentWillMount = async () => {
		let patient = (await new Patient().fetchAll()).data.data;
		let general = (await new General().fetchAll()).data.data;
		let maternal = (await new Maternal().fetchAll()).data.data;
		let tuberculosis = (await new Tb().fetchAll()).data.data;
		let immunation = (await new Immunation().fetchAll()).data.data;
		let dental = (await new Dental().fetchAll()).data.data;
		
		general = general.map(g => {
			g.patient_name = this.getPatientName(g.patient_id, patient)
			return g
		})

		maternal = maternal.map(g => {
			g.patient_name = this.getPatientName(g.patient_id, patient)
			return g
		})

		tuberculosis = tuberculosis.map(g => {
			g.patient_name = this.getPatientName(g.patient_id, patient)
			return g
		})

		dental = dental.map(g => {
			g.patient_name = this.getPatientName(g.patient_id, patient)
			return g
		})

		immunation = immunation.map(g => {
			g.patient_name = this.getPatientName(g.patient_id, patient)
			return g
		})

		this.setState({
			general,
			maternal,
			tuberculosis,
			immunation,
			dental,
			patient
		}, () => {console.log(this.state)});
	};

	getPatientName = (id = 0, patient = []) => {
		let name = ""
		patient.map(p => {
			if(p.id == id){
				name = p.first_name + " " + p.last_name 
			}
		})
		return name
	}

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar backup />
					<div className='content'>
						<div className='statistics-type-container border p-3'>
							<h1>Backup and Restore</h1>
							<hr />
							<CsvDownload data={this.state.general} filename='General.csv' className='btn btn-primary Ripple-parent'>
								Download General
							</CsvDownload>
							<CsvDownload data={this.state.maternal} filename='Maternal.csv' className='btn btn-primary Ripple-parent'>
								Download Maternal
							</CsvDownload>
							<CsvDownload data={this.state.dental} filename='dental.csv' className='btn btn-primary Ripple-parent'>
								Download dental
							</CsvDownload>
							<CsvDownload data={this.state.tuberculosis} filename='tuberculosis.csv' className='btn btn-primary Ripple-parent'>
								Download tuberculosis
							</CsvDownload>
							<CsvDownload data={this.state.immunation} filename='immunation.csv' className='btn btn-primary Ripple-parent'>
								Download immunization
							</CsvDownload>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
