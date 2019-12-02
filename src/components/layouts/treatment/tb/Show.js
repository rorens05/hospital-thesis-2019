import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn, MDBContainer } from 'mdbreact';
import doh from './../../../../assets/images/doh.png';
import General from '../../../../api_connections/Tb';
import Patient from '../../../../api_connections/Patient';
import Family from '../../../../api_connections/Family';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			general: {},
			patient: {},
			family: {}
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
					<Sidebar tb />
					<div className='content'>
						<div className='header'>
							<span>
								<img
									src={window.location.origin + '/assets/images/tb.png'}
									alt='tb'
									className='pageIcon'
								/>
								Tuberculosis Treatment Information
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
											<span className='ml-5'>{this.state.family.serial_number}</span><br/>
											Patient code: <span className='pl-5 ml-5'>{this.state.patient.category}</span>
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
										<td className='info-data'>{this.state.patient.last_name}</td>
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
										<th colSpan='4'>TB TREATMENT/IPT CARD</th>
									</tr>

									<tr>
										<td className='info-label'>TB CASE No./IPT No.:</td>
										<td className='info-data'> {this.state.general.ipt_no} </td>
										<td className='info-label'>Date opened:</td>
										<td className='info-data'>{new Date(this.state.general.date_opened).toDateString()} </td>
									</tr>

									<tr>
										<td className='info-label'>Region/Province:</td>
										<td className='info-data'> {this.state.general.region_province} </td>
										<td className='info-label'>Name of DOTS Facility</td>
										<td className='info-data'> {this.state.general.dots_facility} </td>
									</tr>

									<tr>
										<td className='info-label'>Source of patient:</td>
										<td className='info-data'> {this.state.general.source} </td>
										<td className='info-label'>BCG Scar</td>
										<td className='info-data'> {this.state.general.bcg_scar} </td>
									</tr>

									<tr>
										<th colSpan='4'>DIAGNOSTIC TEST</th>
									</tr>

									<tr>
										<th colSpan='4'>Tuberculin Skin Testing (TST)</th>
									</tr>
									<tr>
										<td className='info-label'>Result:</td>
										<td className='info-data'> {this.state.general.tst_result} </td>
										<td className='info-label'>Date read:</td>
										<td className='info-data'> {new Date(this.state.general.tst_date).toDateString()} </td>
									</tr>

									<tr>
										<th colSpan='4'>CXR Findings</th>
									</tr>
									<tr>
										<td className='info-label'>Result:</td>
										<td className='info-data'> {this.state.general.cxr_result} </td>
										<td className='info-label'>Date of Exam:</td>
										<td className='info-data'> {new Date(this.state.general.cxr_date).toDateString()} </td>
									</tr>

									<tr>
										<th colSpan='4'>Other Exam</th>
									</tr>
									<tr>
										<td className='info-label'>Result:</td>
										<td className='info-data'> {this.state.general.other_exam_result} </td>
										<td className='info-label'>Date of Exam:</td>
										<td className='info-data'> {new Date(this.state.general.other_exam_date).toDateString()} </td>
									</tr>

									<tr>
										<th colSpan='4'>XPERT MTB/RFI</th>
									</tr>
									<tr>
										<td className='info-label'>Result:</td>
										<td className='info-data'> {this.state.general.xpert_result} </td>
										<td className='info-label'>Date of Exam:</td>
										<td className='info-data'> {new Date(this.state.general.xpert_date).toDateString()} </td>
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
										(window.location.href = `/treatment/tb/${this.props.match.params.id}/edit`)}
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
