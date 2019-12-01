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
				bcg_scar: 'Yes',
				createdAt: new Date().toJSON().slice(0, 10),
				cxr_date: new Date().toJSON().slice(0, 10),
				cxr_result: '',
				date_opened: new Date().toJSON().slice(0, 10),
				dots_facility: '',
				ipt_no: '',
				other_exam_date: new Date().toJSON().slice(0, 10),
				other_exam_result: '',
				patient_id: 1,
				region_province: '',
				source: '',
				tst_date: new Date().toJSON().slice(0, 10),
				tst_result: '',
				updatedAt: new Date().toJSON().slice(0, 10),
				xpert_date: new Date().toJSON().slice(0, 10),
				xpert_result: ''
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
			console.log("updated:", this.props.data)
			this.setState({patient: this.props.data})
		} 
	}

	render() {
		let { patient } = this.state;
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>Tuberculosis Treatment Form</h3>
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
					<h4 className='font-weight-bold'>TB TREATMENT / IPT CARD</h4>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='TB case number/IPT No.'
								value={patient.ipt_no}
								onChange={this.handleOnChange}
								name={'ipt_no'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								type='text'
								label='Region/Province'
								value={patient.region_province}
								onChange={this.handleOnChange}
								name={'region_province'}
							/>
						</MDBCol>
					</MDBRow>

					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput
								type='Date'
								label='Date the card was opened'
								className='input-date'
                // value={new Date().toJSON().slice(0, 10)}
                
								value={patient.date_opened}
								onChange={this.handleOnChange}
								name={'date_opened'}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Name of DOTS Facility' 
								value={patient.dots_facility}
								onChange={this.handleOnChange}
								name={'dots_facility'} />
						</MDBCol>
					</MDBRow>

					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Source of patient' 
								value={patient.source}
								onChange={this.handleOnChange}
								name={'source'} />
						</MDBCol>
						<MDBCol sm='6'>

							<label htmlFor=''>
								<small className='text-primary font-weight-light'>BCG Scar</small>
							</label>
							<select className='custom-select default-select' 
								onChange={this.handleOnChange}
								name={'bcg_scar'}>
								<option value='Yes' selected={patient.bcg_scar=='Yes'}>Yes</option>
								<option value='No' selected={patient.bcg_scar=='No'}>No</option>
								<option value='Doubtful' selected={patient.bcg_scar=='Doubtful'}>Doubtful</option>
							</select>
							<br />
							<br />
						</MDBCol>
					</MDBRow>
					<br />

					<h4 className='font-weight-bold'>Diagnostic Test</h4>
					<br />
					<p className='mb-0'>1. Tuberculin Skin Testing (TST)</p>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Result (mm)'
								value={patient.tst_result}
								onChange={this.handleOnChange}
								name={'tst_result'}  />
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='date' label='Date read'	value={patient.tst_date}
								onChange={this.handleOnChange}
								name={'tst_date'}  />
						</MDBCol>
					</MDBRow>

					<p className='mb-0'>2. CXR Findings</p>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Result' 
                value={patient.cxr_result}
                onChange={this.handleOnChange}
                name={'cxr_result'} />
						</MDBCol>
						<MDBCol sm='6'>
              <MDBInput type='date' label='Date of exam' 
                value={patient.cxr_date}
                onChange={this.handleOnChange}
                name={'cxr_date'} />
						</MDBCol>
					</MDBRow>

					<p className='mb-0'>3. Other Exam</p>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Result'  value={patient.other_exam_result}
                onChange={this.handleOnChange}
                name={'other_exam_result'} />
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='date' label='Date of exam' value={patient.other_exam_date}
                onChange={this.handleOnChange}
                name={'other_exam_date'} />
						</MDBCol>
					</MDBRow>

					<p className='mb-0'>4. XPERT MTB/RIF</p>
					<MDBRow className=''>
						<MDBCol sm='6'>
							<MDBInput type='text' label='Result'  value={patient.xpert_result }
                onChange={this.handleOnChange}
                name={'xpert_result'}/> 
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput type='date' label='Date of exam'  value={patient.xpert_date}
                onChange={this.handleOnChange}
                name={'xpert_date'}/>
						</MDBCol>
					</MDBRow>

					<br />
					<MDBBtn
						size='lg'
						className='mt-3'
						color='primary'
            onClick={() => this.props.submit(this.state.patient)}					>
						SAVE
					</MDBBtn>
				</form>
			</MDBContainer>
		);
	}
}

export default Form;
