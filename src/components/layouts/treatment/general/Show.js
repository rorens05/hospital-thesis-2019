import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn, MDBContainer } from 'mdbreact';
import doh from './../../../../assets/images/doh.png';
import images from '../../../../constants/images';
import General from '../../../../api_connections/General';
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
		let {
			family_member,
			first_name,
			last_name,
			middle_name,
			residential_address,
			sex,
			suffix
		} = this.state.patient;

		let { serial_number } = this.state.family;

		let {
			attending_provider,
			blood_pressure,
			chief_complaints,
			date_of_consultation,
			diagnosis,
			health_care_provider,
			height,
			id,
			laboratory_findings,
			medication,
			mode,
			nature_of_visit,
			performed_laboratory_test,
			reasons_for_referral,
			referred_by,
			referred_from,
			referred_to,
			temperature,
			type_of_consultation,
			weight
		} = this.state.general;
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar diseases />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.DISEASE_ICON} alt='general' className='pageIcon' />
								General Checkup Information
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
											Family Serial Number: <span className='ml-5'>{serial_number}</span>
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
										<td className='info-data'>{last_name}</td>
										<td className='info-label'>Suffix:</td>
										<td className='info-data'>{suffix}</td>
									</tr>
									<tr>
										<td className='info-label'>First Name:</td>
										<td className='info-data'>{first_name}</td>
										<td className='info-label'>Middle Name:</td>
										<td className='info-data'>{middle_name}</td>
									</tr>
									<tr>
										<td className='info-label'>Sex:</td>
										<td className='info-data'>{sex}</td>
										<td className='info-label'>Residential Address:</td>
										<td className='info-data'>{residential_address}</td>
									</tr>

									<tr>
										<th colSpan='4'>II. FOR CHU / RHU PERSONNEL ONLY</th>
									</tr>

									<tr>
										<td className='info-label'>Mode of Transaction:</td>
										<td className='info-data'>{mode}</td>
										<td className='info-label'>Referred from:</td>
										<td className='info-data'>{referred_from}</td>
									</tr>
									<tr>
										<td className='info-label'>Date of Consultation:</td>
										<td className='info-data'>{new Date(date_of_consultation).toDateString()}</td>
										<td className='info-label'>Referred to:</td>
										<td className='info-data'>{referred_to}</td>
									</tr>
									<tr>
										<td className='info-label'>Consultation Time:</td>
										<td className='info-data'>{new Date(date_of_consultation).toDateString()}</td>
										<td className='info-label'>Referred by:</td>
										<td className='info-data'>{referred_by}</td>
									</tr>
									<tr>
										<td className='info-label'>Blood pressure:</td>
										<td className='info-data'>{blood_pressure}</td>
										<td className='info-label' rowSpan='5'>
											Reason(s) for Referral
										</td>
										<td className='info-data' rowSpan='5'>
											{reasons_for_referral}
										</td>
									</tr>
									<tr>
										<td className='info-label'>Temperature:</td>
										<td className='info-data'>{temperature}</td>
									</tr>
									<tr>
										<td className='info-label'>Height:</td>
										<td className='info-data'>{height}</td>
									</tr>
									<tr>
										<td className='info-label'>Weight:</td>
										<td className='info-data'>{weight}</td>
									</tr>
									<tr>
										<td className='info-label'>Attending Provider:</td>
										<td className='info-data'>{attending_provider}</td>
									</tr>
									<tr>
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>

									<tr>
										<td className='info-label'>Nature of Visit:</td>
										<td className='info-data'>{nature_of_visit}</td>
										<td className='info-label' rowSpan='2'>
											Chief Complaints:
										</td>
										<td className='info-data' rowSpan='2'>
											{chief_complaints}
										</td>
									</tr>
									<tr>
										<td className='info-label'>Type of Consultation:</td>
										<td className='info-data'>{type_of_consultation}</td>
									</tr>
									<tr>
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>
									<tr>
										<td className='info-label'>Diagnosis</td>
										<td className='info-data' colSpan='3'>
											{diagnosis}
										</td>
									</tr>
									<tr>
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>
									<tr>
										<td className='info-label'>Medication/Treatment:</td>
										<td className='info-data' colSpan='3'>
											{medication}
										</td>
									</tr>
									<tr>
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>
									<tr>
										<td className='info-label'>Laboratory Findings / Impression</td>
										<td className='info-data' colSpan='3'>
											{laboratory_findings}
										</td>
									</tr>
									<tr>
										<th colSpan='4' className='p0 border-gray-1px' />
									</tr>
									<tr>
										<td className='info-label'>Health Care Provider:</td>
										<td className='info-data'>{health_care_provider}</td>
										<td className='info-label'>Performed Laboratory Test:</td>
										<td className='info-data'>{performed_laboratory_test}</td>
									</tr>
								</tbody>
							</table>
							<MDBBtn size='sm' color='info' onClick={() => window.print()}>
								Print
							</MDBBtn>
							{window.localStorage.getItem("ROLE") != "NURSE" &&<MDBBtn
								size='sm'
								color='primary'
								onClick={() => (window.location.href = `/treatment/general/${this.props.match.params.id}/edit`)}
							>
								Edit
							</MDBBtn>}
						</MDBContainer>
					</div>
				</div>
			</div>
		);
	}
}
