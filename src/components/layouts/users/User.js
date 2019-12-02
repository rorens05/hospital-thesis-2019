import React, { Component } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Navbar from '../dashboard/Navbar';
import { MDBBtn } from 'mdbreact';
import PatientItem from './UserItem';
import images from '../../../constants/images';
import PatientAPI from '../../../api_connections/UserAPI';
import Family from '../../../api_connections/Family';

export class Patient extends Component {
	constructor(props) {
		super(props);
		this.state = {
      data: [],
      families: []
		};
	}

	componentWillMount = async () => {
    let response = await new PatientAPI().fetchAll();
    let families = await new Family().fetchAll()
		this.setState({ data: response.data.data, families: families.data.data }, () => console.log(this.state));
	};

  idToSerial = (id) => {
    let familyCode = "NO FAMILY CODE FOUND"
    this.state.families.forEach(fam => {
      if(fam.id == id){
        familyCode = fam.serial_number
      }
    });
    return familyCode
  }


	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar user />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.USER_ICON} alt='patient' className='pageIcon' /> User Record
								{ window.localStorage.getItem('ROLE') != 'NURSE' && <MDBBtn
									color='primary my-btn float-right'
									size='sm'
									onClick={() => {
										window.location.href = '/users/new';
									}}
								>
									Add New User
								</MDBBtn>}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.data.length} records</p>
							<table>
								<thead>
									<tr>
										<th>Username</th>
										<th>Email</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Role</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((item, index) => {
										return <PatientItem data={item} key={item.id} index={index} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Patient;
