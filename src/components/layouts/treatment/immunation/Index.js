import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn } from 'mdbreact';

import General from '../../../../api_connections/Immunation';
import Patient from '../../../../api_connections/Patient';
import Family from '../../../../api_connections/Family';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentWillMount = async () => {
		let generalRes = await new General().fetchAll();
		let patientRes = await new Patient().fetchAll();
		let familyRes = await new Family().fetchAll();
		let general = generalRes.data.data;
		let patient = patientRes.data.data;
		let family = familyRes.data.data;
		console.log(general, 'data');
		console.log(patient, 'patients');
		console.log(family, 'family');

		let data = general.map((item) => {
			let patientInfo = this.getUserInfo(family, patient, item.patient_id);
			return {
				id: item.id,
				family_no: patientInfo.family ? patientInfo.family.serial_number : '',
				name: patientInfo.patient ? patientInfo.patient.first_name + ' ' + patientInfo.patient.last_name : '',
				mother: item.mother_name,
				father: item.father_name,
				birthdate: patientInfo.patient ? patientInfo.patient.birthday : '',
				birthplace: patientInfo.patient ? patientInfo.patient.birth_place : ''
			};
		});

		console.log(data, 'this is data');

		this.setState({ data });
	};

	getUserInfo = (families, patients, id) => {
		let patient;
		let family;

		patients.forEach((item) => {
			if (item.id == id) {
				patient = item;
			}
		});

		if (patient) {
			families.forEach((item) => {
				if (item.id == patient.family_id) {
					family = item;
				}
			});
		}

		console.log({ patient, family }, 'this is family');
		return { patient, family };
	};

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar immunation />
					<div className='content'>
						<div className='header'>
							<span>
								<img
									src={window.location.origin + '/assets/images/immu.png'}
									alt='immu'
									className='pageIcon'
								/>
								Immunization Record
								{window.localStorage.getItem('ROLE') != 'NURSE' && (
									<MDBBtn
										size='sm'
										className='float-right'
										color='primary'
										onClick={() => (window.location.href = '/treatment/immunation/new')}
									>
										Add new record
									</MDBBtn>
								)}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.data.length} records</p>
							{this.state.data.length != 0 && <Table data={this.state.data} />}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
