import React, { Component } from 'react';
import logo from './../../../assets/images/logo.png';
import user from './../../../assets/96px/Admin 96.png';
import nurse from './../../../assets/96px/User\ 96.png';
import { MDBFormInline, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}

	handleOnChange = (e) => {
		this.setState({ search: e.target.value }, () => {
			console.log(this.state);
		});
	};

	render() {
		return (
			<div className='my-navbar'>
				<MDBFormInline className=''>
				<img src={logo} alt='logo' className='logo' />
					<div className='navheader'>
						<h1>RURAL HEALTH UNIT I</h1>
					</div>
					<input
						className='form-control mr-sm-2 search-input'
						type='text'
						placeholder='Search'
						aria-label='Search'
						value={this.state.search}
						onChange={this.handleOnChange}
					/>
					<MDBBtn outline color='white' size='sm' type='submit' className='mr-auto' onClick={(e) => {
						e.preventDefault()
						window.location.href = "/search?search=" + this.state.search
					}}>
						Search
					</MDBBtn>
					<MDBDropdown dropleft className='profile-dropdown'>
						<MDBDropdownToggle color='info' className='profile-name'>
							<img src={window.localStorage.getItem("ROLE") == "NURSE" ? nurse: user} alt='user' className='profile' />
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
