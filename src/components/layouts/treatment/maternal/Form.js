import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PersonalInformation from './../../global/PersonalInformation';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientID: 0,
			patient: {
				attending_provider: '',
				birth_outcome: 'Alive',
				blood_pressure: '',
				consulation_date: new Date().toJSON().slice(0, 10),
				createdAt: new Date().toJSON().slice(0, 10),
				diagnosis_date: new Date().toJSON().slice(0, 10),
				expected_date: new Date().toJSON().slice(0, 10),
				health_care_provider: '',
				height: '',
				lab_findings: '',
				last_mestruation_date: new Date().toJSON().slice(0, 10),
				medical: '',
				number_of_children: 'Single',
				patient_id: null,
				performed_laboratory_test: '',
				pregnancy_condition: 'Pregnancy induced Hupertension(PIH)',
				temperature: '',
				type_of_delivery: 'Normal Delivery',
				updatedAt: new Date().toJSON().slice(0, 10),
				weight: ''
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
			console.table(this.state.patient);
		});
	};

	render() {
		let { patient } = this.state;
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>Maternal Checkup</h3>
					<PersonalInformation
						onChange={(id) => {
							let { patient } = this.state;
							patient.patient_id = id;
							this.setState({ patientID: id, patient }, () => {
								console.log(this.state);
							});
						}}
					/>
					<br />
					<h3 className='h3-header'>Diagnosis</h3> <br />
					<br />
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput
								type='date'
								label='Date of First Consultation'
								className='input-date'
								value={patient.consulation_date}
								onChange={this.handleOnChange}
								name={'consulation_date'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
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
								type='text'
								label='Height'
								value={patient.height}
								onChange={this.handleOnChange}
								name={'height'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Weight'
								value={patient.weight}
								onChange={this.handleOnChange}
								name={'weight'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='date'
								label='Expected Date'
								className='input-date'
								value={patient.expected_date}
								onChange={this.handleOnChange}
								name={'expected_date'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Attending Provider'
								className='input-date'
								value={patient.attending_provider}
								onChange={this.handleOnChange}
								name={'attending_provider'}
							/>
						</MDBCol>
					</MDBRow>
					<br />
					<h3 className='h3-header'>Delivery Details</h3> <br />
					<br />
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='date'
								label='Date'
								value={patient.updatedAt}
								onChange={this.handleOnChange}
								name={'updatedAt'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Type of Delivery</small>
							</label>

							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'type_of_delivery'}
							>
								<option
									value='Normal Delivery'
									selected={patient.type_of_delivery == 'Normal Delivery'}
								>
									Normal Delivery
								</option>
								<option
									value='Cesarean Delivery'
									selected={patient.type_of_delivery == 'Cesarean Delivery'}
								>
									Cesarean Delivery
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Birth Outcome</small>
							</label>

							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'birth_outcome'}
							>
								<option value='Alive' selected={patient.birth_outcome == 'Alive'}>
									Alive
								</option>
								<option value='Miscarriage' selected={patient.birth_outcome == 'Miscarriage'}>
									Miscarriage
								</option>
								<option value='Still born' selected={patient.birth_outcome == 'Still born'}>
									Still born
								</option>
							</select>

							<br />
							<br />
						</MDBCol>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Number of children</small>
							</label>

							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'number_of_children'}
							>
								<option value='Single' selected={patient.number_of_children == 'Single'}>
									Single
								</option>
								<option value='Twins' selected={patient.number_of_children == 'Twins'}>
									Twins
								</option>
								<option value='Triplets' selected={patient.number_of_children == 'Triplets'}>
									Triplets
								</option>
								<option value='Quadruplets' selected={patient.number_of_children == 'Quadruplets'}>
									Quadruplets
								</option>
								<option value='Quintuplets' selected={patient.number_of_children == 'Quintuplets'}>
									Quintuplets
								</option>
								<option value='Sextuplets' selected={patient.number_of_children == 'Sextuplets'}>
									Sextuplets
								</option>
								<option value='Septuplets' selected={patient.number_of_children == 'Septuplets'}>
									Septuplets
								</option>
								<option value='Octuplets' selected={patient.number_of_children == 'Octuplets'}>
									Octuplets
								</option>
								<option value='Nonuplets' selected={patient.number_of_children == 'Nonuplets'}>
									Nonuplets
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>
									Pregnancy-related Conditions/Complications
								</small>
							</label>

							<select
								className='custom-select default-select'
								onChange={this.handleOnChange}
								name={'pregnancy_condition'}
							>
								<option
									value='Pregnancy induced Hupertension(PIH)'
									selected={patient.pregnancy_condition == 'Pregnancy induced Hupertension(PIH)'}
								>
									Pregnancy induced Hupertension(PIH)
								</option>
								<option
									value='Preeclampsia/Eclampsia (PE/E)'
									selected={patient.pregnancy_condition == 'Preeclampsia/Eclampsia (PE/E)'}
								>
									Preeclampsia/Eclampsia (PE/E)
								</option>
								<option
									value='Bleeding during pregnancy or after delivery'
									selected={
										patient.pregnancy_condition == 'Bleeding during pregnancy or after delivery'
									}
								>
									Bleeding during pregnancy or after delivery
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<br />
					<h3 className='h3-header'>Findings</h3> <br />
					<br />
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Medication/Treatment:'
								value={patient.medical}
								onChange={this.handleOnChange}
								name={'medical'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol>
							<MDBInput
								type='textarea'
								label='Laboratory Findings / Impression'
								value={patient.lab_findings}
								onChange={this.handleOnChange}
								name={'lab_findings'}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Name of Care Health Provider'
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
            onClick={() => this.props.submit(this.state.patient)}>
						SAVE
					</MDBBtn>
				</form>
			</MDBContainer>
		);
	}
}

export default Form;
