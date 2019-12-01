import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Family from '../../../api_connections/Family';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			families: [],
			data: {
				serial: '',
				family_id: '',
				birth_place: '',
				birthday: '',
				category: '',
				civil_status: 'Single',
				contact_number: '',
				createdAt: '',
				educational_attainment: 'No Formal Education',
				employment_status: 'Student',
				facility_household_number: '',
				family_id: '',
				family_member: 'Father',
				first_name: '',
				id: '',
				last_name: '',
				middle_name: '',
				philhealth_member: 'Yes',
				philhealth_no: '',
				residential_address: '',
				sex: 'Male',
				status_type: 'Member',
				suffix: '',
				updatedAt: ''
			}
		};
	}

	async componentDidMount() {
    let response = await new Family().fetchAll();
    let {data} = this.state
    data.family_id = response.data.data[0].id
		this.setState({ families: response.data.data, data }, () => console.log(this.state.families));

		this.props.data &&
			this.setState({
				data: this.props.data
			});
	}
	renderSubmit() {
		if (!this.props.readonly) {
			return (
				<MDBBtn size='sm' color='primary'>
					Submit
				</MDBBtn>
			);
		}
	}

	isReadOnly() {
		if (this.props.readonly) {
			return true;
		}
	}

	onChangeHandler = (event) => {
		event = event.target;
		let { data } = this.state;
		data[event.name] = event.value;
		this.setState({ data }, () => console.log(this.state.data));
	};

  componentWillUpdate = (prevProps) => {
    if(prevProps.data != this.props.data){
      this.setState({data: prevProps.data})
    }
  }

	render() {
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>{this.props.children}</h3>
					<MDBRow>
						<MDBCol sm='12'>
							{/* <MDBInput label='Family Serial Number' name='serial' value={this.state.data.serial} /> */}
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Family Serial Number</small>
							</label>
							<select
								className='custom-select default-select'
								name='family_id'
								value={this.state.data.family_id}
								onChange={this.onChangeHandler}
							>
								{this.state.families.map((fam) => {
									return (
										<option
											value={fam.id}
											selected={this.state.data.family_id == fam.id ? true : false}
										>
											{fam.serial_number}
										</option>
									);
								})}
							</select><br/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm="12">
						<MDBInput
								label='Patient Code'
								name='category'
								value={this.state.data.category}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<MDBInput
								label='Last Name'
								name='last_name'
								value={this.state.data.last_name}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								label='First Name'
								name='first_name'
								value={this.state.data.first_name}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<MDBInput
								label='Middle Name'
								name='middle_name'
								value={this.state.data.middle_name}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								label='Suffix (e.g. Jr., Sr., III)'
								name='suffix'
								value={this.state.data.suffix}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='4'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Gender</small>
							</label>
							<select
								className='custom-select default-select'
								name='sex'
								value={this.state.data.sex}
								onChange={this.onChangeHandler}
							>
								<option value='Male' selected={this.state.data.sex == 'Male' ? true : false}>
									Male
								</option>
								<option value='Female' selected={this.state.data.sex == 'Female' ? true : false}>
									Female
								</option>
							</select>
						</MDBCol>
						<MDBCol sm='8'>
							<MDBInput
								label='Residential Address'
								name='residential_address'
								value={this.state.data.residential_address}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<MDBInput
								type='date'
								label='Birth day'
								className='input-date'
								name='birthday'
								value={this.state.data.birthday}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								label='Birth place'
								name='birth_place'
								value={this.state.data.birth_place}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						{/* <MDBCol sm='6'>
							<MDBInput
								label='Spouse name'
								name='birth_place'
								value={this.state.data.}
								onChange={this.onChangeHandler}
							/>
						</MDBCol> */}
						<MDBCol sm='6'>
							<MDBInput
								label='Contact number'
								name='contact_number'
								value={this.state.data.contact_number}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow className='mb-3'>
						<MDBCol sm='4'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Civil Status</small>
							</label>
							<select
								className='custom-select default-select'
								name='civil_status'
								value={this.state.data.civil_status}
								onChange={this.onChangeHandler}
							>
								<option
									value='Single'
									selected={this.state.data.civil_status == 'Single' ? true : false}
								>
									Single
								</option>
								<option
									value='married'
									selected={this.state.data.civil_status == 'married' ? true : false}
								>
									Married
								</option>
								<option
									value='annuled'
									selected={this.state.data.civil_status == 'annuled' ? true : false}
								>
									Annuled
								</option>
								<option
									value='Wodow/er'
									selected={this.state.data.civil_status == 'Wodow/er' ? true : false}
								>
									Widower
								</option>
								<option
									value='Separated'
									selected={this.state.data.civil_status == 'Separated' ? true : false}
								>
									Separated
								</option>
							</select>
						</MDBCol>

						<MDBCol sm='4'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Employement Status</small>
							</label>
							<select
								className='custom-select default-select'
								name='employment_status'
								value={this.state.data.employment_status}
								onChange={this.onChangeHandler}
							>
								<option
									value='Student'
									selected={this.state.data.employment_status == 'Student' ? true : false}
								>
									Student
								</option>
								<option
									value='Employed'
									selected={this.state.data.employment_status == 'Employed' ? true : false}
								>
									Employed
								</option>
								<option
									value='Unknown'
									selected={this.state.data.employment_status == 'Unknown' ? true : false}
								>
									Unknown
								</option>
								<option
									value='Retired'
									selected={this.state.data.employment_status == 'Retired' ? true : false}
								>
									Retired
								</option>
								<option
									value='None/Unemployed'
									selected={this.state.data.employment_status == 'None/Unemployed' ? true : false}
								>
									None/Unemployed
								</option>
							</select>
						</MDBCol>

						<MDBCol sm='4'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Family Member</small>
							</label>
							<select
								className='custom-select default-select'
								name='family_member'
								value={this.state.data.family_member}
								onChange={this.onChangeHandler}
							>
								<option
									value='Father'
									selected={this.state.data.family_member == 'Father' ? true : false}
								>
									Father
								</option>
								<option
									value='Mother'
									selected={this.state.data.family_member == 'Mother' ? true : false}
								>
									Mother
								</option>
								<option value='Son' selected={this.state.data.family_member == 'Son' ? true : false}>
									Son
								</option>
								<option
									value='Daughter'
									selected={this.state.data.family_member == 'Daughter' ? true : false}
								>
									Daughter
								</option>
								<option
									value='Others'
									selected={this.state.data.family_member == 'Others' ? true : false}
								>
									Others
								</option>
							</select>
						</MDBCol>
					</MDBRow>

					<MDBRow>
						<MDBCol sm='3'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Educational Attainment</small>
							</label>
							<select
								className='custom-select default-select'
								name='educational_attainment'
								value={this.state.data.educational_attainment}
								onChange={this.onChangeHandler}
							>
								<option
									value='No Formal Education'
									selected={
										this.state.data.educational_attainment == 'No Formal Education' ? true : false
									}
								>
									No Formal Education
								</option>
								<option
									value='Elementary'
									selected={this.state.data.educational_attainment == 'Elementary' ? true : false}
								>
									Elementary
								</option>
								<option
									value='High School'
									selected={this.state.data.educational_attainment == 'High School' ? true : false}
								>
									High School
								</option>
								<option
									value='Vocational'
									selected={this.state.data.educational_attainment == 'Vocational' ? true : false}
								>
									Vocational
								</option>
								<option
									value='College'
									selected={this.state.data.educational_attainment == 'College' ? true : false}
								>
									College
								</option>
								<option
									value='Post Graduate'
									selected={this.state.data.educational_attainment == 'Post Graduate' ? true : false}
								>
									Post Graduate
								</option>
							</select>
						</MDBCol>
						<MDBCol sm='4'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>PhilHealth Member</small>
							</label>
							<select
								className='custom-select default-select'
								name='philhealth_member'
								value={this.state.data.philhealth_member}
								onChange={this.onChangeHandler}
							>
								<option
									value='Yes'
									selected={this.state.data.philhealth_member == 'Yes' ? true : false}
								>
									Yes
								</option>
								<option value='No' selected={this.state.data.philhealth_member == 'No' ? true : false}>
									No
								</option>
							</select>
							<br />

							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Status Type</small>
							</label>
							<select
								className='custom-select default-select'
								name='status_type'
								value={this.state.data.status_type}
								onChange={this.onChangeHandler}
							>
								<option
									value='Member'
									selected={this.state.data.status_type == 'Member' ? true : false}
								>
									Member
								</option>
								<option
									value='Dependent'
									selected={this.state.data.status_type == 'Dependent' ? true : false}
								>
									Dependent
								</option>
							</select>
						</MDBCol>
						<MDBCol sm='5' className='philhealthNumber-input'>
							<MDBInput
								label='PhilHealth number'
								name='philhealth_no'
								value={this.state.data.philhealth_no}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBBtn
						size='lg'
						className='mt-3'
						color='primary'
						onClick={() => this.props.onSubmit(this.state.data)}
					>
						SAVE
					</MDBBtn>
				</form>
			</MDBContainer>
		);
	}
}
