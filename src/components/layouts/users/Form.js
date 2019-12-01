import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Family from '../../../api_connections/Family';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				username: '',
				first_name: '',
				last_name: '',
				email: '',
				role: 'Admin',
				password_confirmation: '',
				password: '',
			}
		};
	}

	async componentDidMount() {
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
		if (prevProps.data != this.props.data) {
			this.setState({ data: prevProps.data });
		}
	};

	render() {
		return (
			<MDBContainer className='patient-form-container'>
				<form className='default-form'>
					<h3 className='h3-header'>{this.props.children}</h3>

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
						<MDBCol sm='12'>
							<MDBInput
								label='Email'
								name='email'
								value={this.state.data.email}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<label htmlFor=''>
								<small className='text-primary font-weight-light'>Role</small>
							</label>
							<select
								className='custom-select default-select'
								name='role'
								value={this.state.data.sex}
								onChange={this.onChangeHandler}
							>
								<option value='Admin' selected={this.state.data.sex == 'Admin' ? true : false}>
									Admin
								</option>
								<option value='Nurse' selected={this.state.data.sex == 'Nurse' ? true : false}>
									Nurse
								</option>
							</select>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								label='Username'
								name='username'
								value={this.state.data.username}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol sm='6'>
							<MDBInput
								label='Password'
								name='password'
								type='password'
								value={this.state.data.password}
								onChange={this.onChangeHandler}
							/>
						</MDBCol>
						<MDBCol sm='6'>
							<MDBInput
								label='Password Confirmation'
								name='password_confirmation'
								type='password'
								value={this.state.data.password_confirmation}
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
