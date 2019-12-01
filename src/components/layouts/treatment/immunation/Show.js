import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn, MDBContainer } from 'mdbreact';
import doh from './../../../../assets/images/doh.png';

import General from '../../../../api_connections/Immunation';
import Patient from '../../../../api_connections/Patient';
import Family from '../../../../api_connections/Family';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			general: {},
			patient: {},
			family: {},
			bgc_date: '2019-09-08T00:00:00.000Z',
			bgc_doses: 1,
			birth_height: '1kg',
			birth_weight: '1ft',
			createdAt: '2019-10-23T21:42:51.000Z',
			father_name: 'Laurence',
			hepatitisb_date: '2019-09-08T00:00:00.000Z',
			hepatitisb_doses: 1,
			id: 1,
			inactive_polio_date: '2019-09-08T00:00:00.000Z',
			inactive_polio_doses: 1,
			measles_date1: '2019-09-08T00:00:00.000Z',
			measles_date2: '2019-09-08T00:00:00.000Z',
			measles_doses: 1,
			mother_name: 'Jemima',
			patient_id: 1,
			pentavalent_date1: '2019-09-08T00:00:00.000Z',
			pentavalent_date2: '2019-09-08T00:00:00.000Z',
			pentavalent_date3: '2019-09-08T00:00:00.000Z',
			pentavalent_doses: 1,
			pneumococcal_date1: '2019-09-08T00:00:00.000Z',
			pneumococcal_date2: '2019-09-08T00:00:00.000Z',
			pneumococcal_date3: '2019-09-08T00:00:00.000Z',
			pneumococcal_doses: 1,
			polio_date1: '2019-09-08T00:00:00.000Z',
			polio_date2: '2019-09-08T00:00:00.000Z',
			polio_date3: '2019-09-08T00:00:00.000Z',
			polio_doses: 1,
			updatedAt: '2019-10-23T21:45:55.000Z'
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
			() => console.log(this.state,this.state.general)
		);
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
								Child Immunization Information
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
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>

									<tr>
										<td className='info-label'>Mother's name:</td>
										<td className='info-data'>{this.state.general.mother_name}</td>
										<td className='info-label'>Father's name:</td>
										<td className='info-data'>{this.state.general.father_name}</td>
									</tr>

									<tr>
										<td className='info-label'>Birth height:</td>
										<td className='info-data'> {this.state.general.birth_height} </td>
										<td className='info-label'>Birth weight:</td>
										<td className='info-data'>{this.state.general.birth_weight}</td>
									</tr>

									<tr>
										<th colSpan='4'>CHILD IMMUNATION RECORD</th>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											BGC
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.bgc_doses} </td>
										<td className='info-label'>Date (Date of birth):</td>
										<td className='info-data'>{new Date(this.state.patient.createdAt).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											HEPATITIS B
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.hepatitisb_doses} </td>
										<td className='info-label'>Date (Date of birth):</td>
										<td className='info-data'>{new Date(this.state.general.hepatitisb_date).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											PENTAVALENT VACCINE (DPT-HepB-HiB)
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.pentavalent_doses} </td>
										<td className='info-label'>Date (1 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pentavalent_date1).toDateString()}</td>
									</tr>
									<tr>
										<td className='info-label'>Date (2 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pentavalent_date2).toDateString()}</td>
										<td className='info-label'>Date (3 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pentavalent_date3).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											ORAL POLIO VACCINE (OPV)
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.polio_doses} </td>
										<td className='info-label'>Date (1 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.polio_date1).toDateString()}</td>
									</tr>
									<tr>
										<td className='info-label'>Date (2 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.polio_date2).toDateString()}</td>
										<td className='info-label'>Date (3 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.polio_date3).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											INACTIVATED POLIO VACCINE (IPV)
										</td>
									</tr>

									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.inactive_polio_doses} </td>
										<td className='info-label'>Date (3 1/2 month):</td>
										<td className='info-data'>{new Date(this.state.general.inactive_polio_date).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											PNEUMOCOCCAL CONJUGATE VACCINE (PCV)
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {this.state.general.pneumococcal_doses} </td>
										<td className='info-label'>Date (1 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pneumococcal_date1).toDateString()}</td>
									</tr>
									<tr>
										<td className='info-label'>Date (2 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pneumococcal_date2).toDateString()}</td>
										<td className='info-label'>Date (3 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.pneumococcal_date3).toDateString()}</td>
									</tr>

									<tr>
										<td className='info-label' colSpan='4'>
											MEASLES, MUMPS, RUBELLA (MMR)
										</td>
									</tr>
									<tr>
										<td className='info-label'>Doses:</td>
										<td className='info-data'> {new Date(this.state.general.measles_doses).toDateString()} </td>
										<td className='info-label'>Date (1 1/2 Month):</td>
										<td className='info-data'>{new Date(this.state.general.measles_date1).toDateString()}</td>
									</tr>
									<tr>
										<td className='info-label'>Date (2 1/2 Month):</td>
										<td className='info-data' colSpan='3'>
											{new Date(this.state.general.measles_date2).toDateString()}
										</td>
									</tr>
								</tbody>
							</table>
							<MDBBtn size='sm' color='info' onClick={() => window.print()}>
								Print
							</MDBBtn>
							{window.localStorage.getItem('ROLE') != 'NURSE' && (
								<MDBBtn
									size='sm'
									color='primary'
									onClick={() =>
										(window.location.href = `/treatment/immunation/${this.state.general.id}/edit`)}
								>
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
