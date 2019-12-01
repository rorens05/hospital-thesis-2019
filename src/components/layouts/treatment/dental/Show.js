import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn, MDBContainer } from 'mdbreact';
import doh from './../../../../assets/images/doh.png';
import images from '../../../../constants/images';

import General from '../../../../api_connections/Dental';
import Patient from '../../../../api_connections/Patient';
import Family from '../../../../api_connections/Family';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			general: {},
			patient: {},
			family: {},
			consultation_date: '2019-09-09T00:00:00.000Z',
			createdAt: '2019-10-23T21:34:45.000Z',
			health_care_provider: 'dr strange',
			id: 1,
			last_dentist: 'him',
			letter_number: 'a',
			mode: 'Walking',
			nature: 'standandard',
			patient_id: 1,
			performed_lab_test: 'hospital',
			referred_by: 'me',
			referred_from: 'there',
			referred_to: 'you',
			remarks: 'not good',
			updatedAt: '2019-10-23T21:37:13.000Z'
		};
	}

	componentDidMount = async () => {
		let generalRes = await new General().fetch(this.props.match.params.id);
		let general = generalRes.data.data;
		let patientRes = await new Patient().fetch(general.patient_id);
		let patient = patientRes.data.data;
		let familyRes = null;
		let family = null;
		if (patient) {
			familyRes = await new Family().fetch(patient.family_id);
			family = familyRes.data.data;
		}

		this.setState(
			{
				general,
				patient,
				family
			},
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar dental />
					<div className='content'>
						<div className='header'>
							<span>
								<img
									src={window.location.origin + '/assets/images/dental.png'}
									alt='dental'
									className='pageIcon'
								/>
								Dental information
							</span>
						</div>
						<MDBContainer className='info-coupon'>
							<table className='info-table'>
								<thead>
									<tr>
										<th colSpan='2' className='doh-header'>
											<img src={doh} alt='DOH' />
											<small className='doh-sub-title'>Republic of the Philippines</small>
											<br />
											<span className='doh-title'>Department of Health</span>
											<br />
											<small className='doh-sub-title'>Kagawaran ng Kalusugan</small>
											<br />
										</th>
										<th colSpan='2' className='pl-3'>
											Family Serial Number:{' '}
											<span className='ml-5'>{this.state.family.serial_number}</span>
											<br />
										</th>
									</tr>
									<tr>
										<th colSpan='4'>PATIENT INFORMATION</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='info-label'>Last Name:</td>
										<td className='info-data'>{this.state.patient.last_name}</td>
										<td className='info-label'>Suffix:</td>
										<td className='info-data'>{this.state.patient.suffix}</td>
									</tr>
									<tr>
										<td className='info-label'>First Name:</td>
										<td className='info-data'>{this.state.patient.first_name}</td>
										<td className='info-label'>Middle Name:</td>
										<td className='info-data'>{this.state.patient.middle_name}</td>
									</tr>
									<tr>
										<td className='info-label'>Sex:</td>
										<td className='info-data'>{this.state.patient.sex}</td>
										<td className='info-label'>Residential Address:</td>
										<td className='info-data'>{this.state.patient.residential_address}</td>
									</tr>

									<tr>
										<th colSpan='4'>II. FOR CHU / RHU PERSONNEL ONLY</th>
									</tr>

									<tr>
										<td className='info-label'>Mode of Transaction:</td>
										<td className='info-data'>{this.state.general.mode}</td>
										<td className='info-label'>Referred from:</td>
										<td className='info-data'>{this.state.general.referred_from}</td>
									</tr>
									<tr>
										<td className='info-label'>Date of Consultation:</td>
										<td className='info-data'>{new Date(this.state.general.consultation_date).toDateString()}</td>
										<td className='info-label'>Referred to:</td>
										<td className='info-data'>{this.state.general.referred_to}</td>
									</tr>
									<tr>
										<td className='info-label'>Consultation Time:</td>
										<td className='info-data'>{new Date(this.state.general.consultation_date).toDateString()}</td>
										<td className='info-label'>Referred by:</td>
										<td className='info-data'>{this.state.general.referred_by}</td>
									</tr>
									<tr>
										<td className='info-label'>Nature of Visit:</td>
										<td className='info-data'>{this.state.general.nature}</td>
										<td className='info-label'>Last dentist:</td>
										<td className='info-data'>{this.state.general.last_dentist}</td>
									</tr>
									<tr>
										<th rowSpan='2'>Teath Structure</th>
										<td rowSpan='2' style={{ textAlign: 'center' }}>
											<img src={images.TEETH_STRUCTURE} alt={'teeth'} style={{ width: '80%' }} />
										</td>
										<th>Letter number</th>
										<td>{this.state.general.letter_number}</td>
									</tr>
									<tr>
										<th>Remark</th>
										<td>{this.state.general.remarks}</td>
									</tr>
									<tr>
										<td className='info-label'>Health Care Provider:</td>
										<td className='info-data'>{this.state.general.health_care_provider}</td>
										<td className='info-label'>Performed Laboratory Test:</td>
										<td className='info-data'>{this.state.general.performed_lab_test}</td>
									</tr>
								</tbody>
							</table>
							<MDBBtn size='sm' color='info' onClick={() => window.print()}>
								Print
							</MDBBtn>
							{window.localStorage.getItem('ROLE') != 'NURSE' && (
								<MDBBtn size='sm' color='primary' onClick={() => window.location.href = `/treatment/dental/${this.props.match.params.id}/edit`}>
									 Edit
								</MDBBtn>
							)}
						</MDBContainer>
					</div>
				</div>
			</div>
		);
	}
}
