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
				date_of_consultation: new Date().toJSON().slice(0, 10),
				bgc_date: new Date().toJSON().slice(0, 10),
				updatedAt: new Date().toJSON().slice(0, 10),
				bgc_doses: 1,
				birth_height: "",
				birth_weight: "",
				father_name: "",
				hepatitisb_date: new Date().toJSON().slice(0, 10),
				hepatitisb_doses: 1,
				inactive_polio_date: new Date().toJSON().slice(0, 10),
				inactive_polio_doses: 1,
				measles_date1: new Date().toJSON().slice(0, 10),
				measles_date2: new Date().toJSON().slice(0, 10),
				measles_doses: 1,
				mother_name: "",
				pentavalent_date1: new Date().toJSON().slice(0, 10),
				pentavalent_date2: new Date().toJSON().slice(0, 10),
				pentavalent_date3: new Date().toJSON().slice(0, 10),
				pentavalent_doses: 1,
				pneumococcal_date1: new Date().toJSON().slice(0, 10),
				pneumococcal_date2: new Date().toJSON().slice(0, 10),
				pneumococcal_date3: new Date().toJSON().slice(0, 10),
				pneumococcal_doses: 1,
				polio_date1: new Date().toJSON().slice(0, 10),
				polio_date2: new Date().toJSON().slice(0, 10),
				polio_date3: new Date().toJSON().slice(0, 10),
				polio_doses: 1,
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
			console.log("updated", this.props.data)
			this.setState({patient: this.props.data})
		} 
	}
	render() {
		let {patient} = this.state
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>Child Immunization Form</h3>

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
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Mother&#39;s Name' 
								value={patient.mother_name}
								onChange={this.handleOnChange}
								name={'mother_name'}/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Father&#39;s Name'
								value={patient.father_name}
								onChange={this.handleOnChange}
								name={'father_name'} />
						</MDBCol>
					</MDBRow>

					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='Date'
								label='Date of Birth'
								className='input-date'
								defaultValue='1999-07-21'
								value={patient.updatedAt}
								onChange={this.handleOnChange}
								name={'updatedAt'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Birth Height'
								value={patient.birth_height}
								onChange={this.handleOnChange}
								name={'birth_height'} />
						</MDBCol>
					</MDBRow>

					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Birth Weight'
								value={patient.birth_weight}
								onChange={this.handleOnChange}
								name={'birth_weight'} />
						</MDBCol>
					</MDBRow>

					<h4>BCG</h4>
					<p>
						<small>Doses: 1</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput type='Date' label='Date of Birth (Pagkapanganak)' className='input-date'
								value={patient.bgc_date}
								onChange={this.handleOnChange}
								name={'bgc_date'} />
						</MDBCol>
					</MDBRow>

					<h4>HEPATITIS B</h4>
					<p>
						<small>Doses: 1</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput type='Date' label='Date of Birth (Pagkapanganak)' className='input-date'
								value={patient.hepatitisb_date}
								onChange={this.handleOnChange}
								name={'hepatitisb_date'} />
						</MDBCol>
					</MDBRow>

					<h4>PENTAVALENT VACCINE (DPT-HepB-HiB)</h4>
					<p>
						<small>Doses: 3</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='1 1/2 month' className='input-date'
								value={patient.pentavalent_date1}
								onChange={this.handleOnChange}
								name={'pentavalent_date1'} />
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='2 1/2 month' className='input-date' 
								value={patient.pentavalent_date2}
								onChange={this.handleOnChange}
								name={'pentavalent_date2'}/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='3 1/2 month' className='input-date' 
								value={patient.pentavalent_date3}
								onChange={this.handleOnChange}
								name={'pentavalent_date3'}/>
						</MDBCol>
					</MDBRow>

					<h4>ORAL POLIO VACCINE (OPV)</h4>
					<p>
						<small>Doses: 3</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='1 1/2 month' className='input-date' 
								value={patient.polio_date1}
								onChange={this.handleOnChange}
								name={'polio_date1'}/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='2 1/2 month' className='input-date' 
								value={patient.polio_date2}
								onChange={this.handleOnChange}
								name={'polio_date2'}/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='3 1/2 month' className='input-date'
								value={patient.polio_date3}
								onChange={this.handleOnChange}
								name={'polio_date3'} />
						</MDBCol>
					</MDBRow>

					<h4>INACTIVED POLIO VACCINE (IPV)</h4>
					<p>
						<small>Doses: 1</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='12'>
							<MDBInput type='Date' label='3 1/2 month' className='input-date' 
								value={patient.inactive_polio_date}
								onChange={this.handleOnChange}
								name={'inactive_polio_date'}/>
						</MDBCol>
					</MDBRow>

					<h4>PNEUMOCOCCAL CONJUGATE VACCINE (PCV)</h4>
					<p>
						<small>Doses: 3</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='1 1/2 month' className='input-date' 
								value={patient.pneumococcal_date1}
								onChange={this.handleOnChange}
								name={'pneumococcal_date1'}/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='2 1/2 month' className='input-date' 
								value={patient.pneumococcal_date2}
								onChange={this.handleOnChange}
								name={'pneumococcal_date2'}/>
						</MDBCol>
						<MDBCol sm='4'>
							<MDBInput type='Date' label='3 1/2 month' className='input-date' 
								value={patient.pneumococcal_date3}
								onChange={this.handleOnChange}
								name={'pneumococcal_date3'}/>
						</MDBCol>
					</MDBRow>

					<h4>MEASLES, MIMPS, RUBELLA (MMR)</h4>
					<p>
						<small>Doses: 2</small>
					</p>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='Date' label='9 month' className='input-date'
								value={patient.measles_date1}
								onChange={this.handleOnChange}
								name={'measles_date1'} />
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='Date' label='1 year' className='input-date' 
								value={patient.measles_date2}
								onChange={this.handleOnChange}
								name={'measles_date2'}/>
						</MDBCol>
					</MDBRow>

					<br />
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
