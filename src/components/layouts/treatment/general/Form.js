import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PersonalInformation from './../../global/PersonalInformation';
export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientID: 0,
			patient: {
				patient_id: '',
				mode: 'Walk-in',
				date_of_consultation: new Date().toJSON().slice(0, 10),
				referred_from: '',
				referred_by: '',
				referred_to: '',
				reasons_for_referral: '',
				blood_pressure: '',
				temperature: '',
				height: '',
				weight: '',
				attending_provider: '',
				nature_of_visit: 'New Consultation/Case',
				type_of_consultation: 'General',
				chief_complaints: '',
				diagnosis: '',
				medication: '',
				laboratory_findings: '',
				health_care_provider: '',
				performed_laboratory_test: ''
			}
		};
	}

	componentDidUpdate = (prevProps) => {
		if(prevProps.data != this.props.data){
			this.setState({patient: this.props.data})
		} 
	}

	handleOnChange = (event) => {
		let { target } = event;
		let { patient } = this.state;
		patient[target.name] = target.value;
		this.setState({ patient }, () => {
			console.log(this.state.patient);
		});
	};

	render() {
		const { patient } = this.state;
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>General checkup</h3>
					<PersonalInformation
						onChange={(id) => {
							let { patient } = this.state;
							patient.patient_id = id;
							this.setState({ patientID: id, patient }, () => {
								console.log(this.state);
							});
						}}
					/>

					<MDBRow>
						<MDBCol sm='12'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Mode of Transaction</small>
							</label>
							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'mode'}
							>
								<option value='Walk-in' selected={patient.mode == 'Walk-in'}>
									Walk-in
								</option>
								<option value='Visited' selected={patient.mode == 'Visited'}>
									Visited
								</option>
								<option value='Referral' selected={patient.mode == 'Referral'}>
									Referral
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput
								type='date'
								label='Date of Consultation'
								className='input-date'
								value={patient.date_of_consultation}
								onChange={this.handleOnChange}
								name={'date_of_consultation'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='number'
								label='Blood Pressure'
								value={patient.blood_pressure}
								onChange={this.handleOnChange}
								name={'blood_pressure'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='number'
								label='Temperature'
								value={patient.temperature}
								onChange={this.handleOnChange}
								name={'temperature'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='number'
								label='Height'
								value={patient.height}
								onChange={this.handleOnChange}
								name={'height'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='number'
								label='Weight'
								value={patient.weight}
								onChange={this.handleOnChange}
								name={'weight'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput
								type='text'
								label='Name of Attending Provider'
								value={patient.attending_provider}
								onChange={this.handleOnChange}
								name={'attending_provider'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Referred From'
								value={patient.referred_from}
								onChange={this.handleOnChange}
								name={'referred_from'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Referred to'
								value={patient.referred_to}
								onChange={this.handleOnChange}
								name={'referred_to'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='8'>
							<MDBInput
								type='text'
								label='Reason(s) for Referral'
								value={patient.reasons_for_referral}
								onChange={this.handleOnChange}
								name={'reasons_for_referral'}
							/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput
								type='text'
								label='Referred by'
								value={patient.referred_by}
								onChange={this.handleOnChange}
								name={'referred_by'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Nature of Visit</small>
							</label>

							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'nature_of_visit'}
							>
								<option
									value='New Consultation/Case'
									selected={patient.nature_of_visit == 'New Consultation/Case'}
								>
									New Consultation/Case
								</option>
								<option value='New Admission' selected={patient.nature_of_visit == 'New Admission'}>
									New Admission
								</option>
								<option value='Follow-up visit' selected={patient.nature_of_visit == 'Follow-up visit'}>
									Follow-up visit
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Type of Consultation</small>
							</label>


							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'type_of_consultation'}
							>
								<option
									value='General'
									selected={patient.type_of_consultation == 'General'}
								>
									General
								</option>
								<option
									value='Child Care'
									selected={patient.type_of_consultation == 'Child Care'}
								>
									Child Care
								</option>
								<option
									value='Child Nutrition'
									selected={patient.type_of_consultation == 'Child Nutrition'}
								>
									Child Nutrition
								</option>
								<option
									value='Injury'
									selected={patient.type_of_consultation == 'Injury'}
								>
									Injury
								</option>
								<option
									value='Adult Immunization'
									selected={patient.type_of_consultation == 'Adult Immunization'}
								>
									Adult Immunization
								</option>
								<option
									value='Family Planning'
									selected={patient.type_of_consultation == 'Family Planning'}
								>
									Family Planning
								</option>
								<option
									value='Postpartum'
									selected={patient.type_of_consultation == 'Postpartum'}
								>
									Postpartum
								</option>
								<option
									value='Sick Children'
									selected={patient.type_of_consultation == 'Sick Children'}
								>
									Sick Children
								</option>
								<option
									value='Firecracker Injury'
									selected={patient.type_of_consultation == 'Firecracker Injury'}
								>
									Firecracker Injury
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Chief Complaints'
								value={patient.chief_complaints}
								onChange={this.handleOnChange}
								name={'chief_complaints'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Diagnosis'
								value={patient.diagnosis}
								onChange={this.handleOnChange}
								name={'diagnosis'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Medication Treatment'
								value={patient.medication}
								onChange={this.handleOnChange}
								name={'medication'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Laboratory Findings / Impression'
								value={patient.laboratory_findings}
								onChange={this.handleOnChange}
								name={'laboratory_findings'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Name of Health Provider'
								value={patient.health_care_provider}
								onChange={this.handleOnChange}
								name={'health_care_provider'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Performed Laboratory Test'
								value={patient.performed_laboratory_test}
								onChange={this.handleOnChange}
								name={'performed_laboratory_test'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBBtn
						size='lg'
						className='mt-3'
						color='primary'
						onClick={() => this.props.submit(this.state.patient)}
					>
						SAVE
					</MDBBtn>
				</form>
			</MDBContainer>
		);
	}
}

export default Form;
