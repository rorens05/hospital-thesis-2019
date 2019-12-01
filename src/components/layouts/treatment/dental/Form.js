import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PersonalInformation from './../../global/PersonalInformation';
import images from '../../../../constants/images';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientID: 0,
			patient: {
				consultation_date: new Date().toJSON().slice(0, 10),
				health_care_provider: '',
				last_dentist: '',
				letter_number: '',
				mode: '',
				nature: '',
				patient_id: 2,
				performed_lab_test: '',
				referred_by: '',
				referred_from: '',
				referred_to: '',
				remarks: ''
			}
		};
	}

	handleOnChange = (event) => {
		let { target } = event;
		let { patient } = this.state;
		patient[target.name] = target.value;
		this.setState({ patient }, () => {
			console.log(this.state.patient);
		});
	};

	componentDidUpdate = (prevProps) => {
		if(prevProps.data != this.props.data){
			this.setState({patient: this.props.data})
		} 
	}

	render() {
		let { patient } = this.state;
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>Dental</h3>

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
								value={patient.consultation_date}
								onChange={this.handleOnChange}
								name={'consultation_date'}
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
						<MDBCol sm='6'>
							<MDBInput type='text' label='Referred by'
								value={patient.referred_by}
								onChange={this.handleOnChange}
								name={'referred_by'} />
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
								name={'nature'}
							>
								<option value='New Consultation/Case' selected={patient.nature == 'New Consultation/Case'}>
									New Consultation/Case
								</option>
								<option value='New Admission' selected={patient.nature == 'New Admission'}>
									New Admission
								</option>
								<option value='Follow-up visit' selected={patient.nature == 'Follow-up visit'}>
									Follow-up visit
								</option>
							</select>
							<br />
							<br />
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Last dentist'
								value={patient.last_dentist}
								onChange={this.handleOnChange}
								name={'last_dentist'} />
						</MDBCol>
					</MDBRow>
          <MDBRow>
            <MDBCol sm="12" style={{padding: '10%'}}>
            <img src={images.TEETH_STRUCTURE} alt={'teeth'} style={{ width: '80%' }} />
            </MDBCol>
          </MDBRow>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput type='text' label='Teeth Letter/number' 
								value={patient.letter_number}
								onChange={this.handleOnChange}
								name={'letter_number'}  />
						</MDBCol>
					</MDBRow>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput type='text' label='Name of Health Provider' 
								value={patient.health_care_provider}
								onChange={this.handleOnChange}
								name={'health_care_provider'}  />
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
