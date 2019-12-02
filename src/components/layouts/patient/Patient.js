import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
import { MDBBtn } from 'mdbreact';
import PatientItem from './PatientItem';
import images from '../../../constants/images';
import PatientAPI from '../../../api_connections/Patient';
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
		if(response.status == "error"){
			alert("Network error")
			return
		}
		console.log(response, families)
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
					<Sidebar patient />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.PATIENT_ICON} alt='patient' className='pageIcon' /> Patient Record
								{window.localStorage.getItem("ROLE") != "NURSE" &&<MDBBtn
									color='primary my-btn float-right'
									size='sm'
									onClick={() => {
										window.location.href = '/patients/new';
									}}
								>
									Add New Patient
								</MDBBtn>}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.data.length} records</p>
							<table>
								<thead>
									<tr>
										<th>Family Code</th>
										<th>Patient Code</th>
										<th>Last Name</th>
										<th>First Name</th>
										<th>Middle Name</th>
										<th>Suffix</th>
										<th>Gender</th>
										<th>Residential Address</th>
										<th>Contact Number</th>
										<th>Family Position</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((item) => {
										return <PatientItem data={item} key={item.id} famCode={this.idToSerial(item.family_id)}/>;
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
