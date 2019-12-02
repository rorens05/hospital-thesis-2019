import React, { Component } from 'react';
import logo from './../../../assets/images/logo.png';
import user from './../../../assets/96px/Admin 96.png';
import nurse from './../../../assets/96px/User 96.png';
import { MDBFormInline, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

import Patient from '../../../api_connections/Patient';
import Family from '../../../api_connections/Family';

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			patientResult: []
		};
	}

	componentDidMount = () => {

		console.log(window.location.pathname)
	};

	handleOnChange = (e) => {
		this.setState({ search: e.target.value }, async() => {
			console.log(this.state);

			let patients = (await new Patient().fetchAll()).data.data;
			let families = (await new Family().fetchAll()).data.data;

			console.log({ patients, families });
			let search = this.state.search

			let patientFilter = patients.filter((p) => {
				return (
					p.first_name.toLowerCase().includes(search.toLowerCase()) ||
					p.last_name.toLowerCase().includes(search.toLowerCase()) ||
					p.family_member.toLowerCase().includes(search.toLowerCase()) ||
					p.residential_address.toLowerCase().includes(search.toLowerCase())
				);
			});

			console.log({patientFilter});

			this.setState({patientResult: patientFilter})
		});


	};

	render() {
		return (
			<div className='my-navbar'>
				<MDBFormInline className='navbar-container'>
					<img src={logo} alt='logo' className='logo' />
					<div className='navheader'>
						<h1>RURAL HEALTH UNIT I</h1>
					</div>
					{
				window.location.pathname == '/' ? (	<>	
					<input
						className='form-control mr-sm-2 search-input invisible'
						type='text'
						placeholder='Search'
						aria-label='Search'
						value={this.state.search}
						onChange={this.handleOnChange}
					/>
					<MDBBtn
						outline
						color='white'
						size='sm'
						type='submit'
						className='mr-auto invisible'
						onClick={(e) => {
							e.preventDefault();
							window.location.href = '/search?search=' + this.state.search;
						}}
					>
						Search
					</MDBBtn>
				</>) : (
					<div class="search-container">	
						<input
							className='form-control search-input '
							type='text'
							placeholder='Search'
							aria-label='Search'
							value={this.state.search}
							onChange={this.handleOnChange}
						/>
						<MDBBtn
							outline
							color='white'
							size='sm'
							type='submit'
							className='mr-auto '
							onClick={(e) => {
								e.preventDefault();
								window.location.href = '/search?search=' + this.state.search;
							}}
						>
							Search
						</MDBBtn>
							{
								this.state.patientResult.length > 0 && this.state.search != "" ? (
									<div class="suggestion-container">
										{
											this.state.patientResult.map(patient => {
												return (
													<>
														<a href={"/patients/" + patient.id}>{patient.first_name + " " + patient.last_name}</a><br/>
													</>
												)
											})
										}			
									</div>
								) : <div/>
							}
					</div>
				)
			}
					
					<MDBDropdown dropleft className='profile-dropdown'>
						<MDBDropdownToggle color='info' className='profile-name'>
							<img
								src={window.localStorage.getItem('ROLE') == 'NURSE' ? nurse : user}
								alt='user'
								className='profile'
							/>
							{window.localStorage.getItem('ROLE')}
						</MDBDropdownToggle>
						<MDBDropdownMenu basic>
							<MDBDropdownItem>Profile</MDBDropdownItem>
							<MDBDropdownItem
								onClick={() => {
									localStorage.clear();
									window.location.replace('/login');
								}}
							>
								<a href='#'>Logout</a>
							</MDBDropdownItem>
						</MDBDropdownMenu>
					</MDBDropdown>
				</MDBFormInline>
			</div>
		);
	}
}

export default Navbar;
