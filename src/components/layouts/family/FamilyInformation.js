import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
import AddNewFamily from './AddNewFamily';
import PatientItem from './../patient/PatientItem';
import images from '../../../constants/images';
import Family from '../../../api_connections/Family';
import Patient from '../../../api_connections/Patient';
import { MDBCol, MDBRow, MDBInput } from 'mdbreact';

export default class FamilyInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			familyMembers: [],
			families: []
		};
	}

	componentDidMount = async () => {
		let response = await new Family().fetch(this.props.match.params.id);
		let patients = await new Patient().fetchAll();
		let familyPatients = [];
		patients.data.data.forEach((item) => {
			if (item.family_id == this.props.match.params.id) {
				familyPatients.push(item);
			}
		});

		this.setState({ data: response.data.data, familyMembers: familyPatients }, () => console.log(this.state));

		response = await new Family().fetchAll();
		let { data } = this.state;
		data.family_id = response.data.data[0].id;
		this.setState({ families: response.data.data, data }, () => console.log(this.state.families));
	};

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar family />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.FAMILY_ICON} alt='family' className='pageIcon' />Family Record
								{window.localStorage.getItem("ROLE") != "NURSE" &&<AddNewFamily data={this.state.data} />}
							</span>
						</div>

						<div className='table-container p-3'>
							<MDBRow>
								<MDBCol sm='12'>
									
									<label htmlFor=''>
										<small className='text-primary font-weight-light'>Family Serial Number</small>
									</label>
									<select
										className='custom-select default-select'
										name='family_id'
										value={this.state.data.family_id}
										onChange={(event) => {
											window.location.href = '/family/' + event.target.value;
										}}
									>
										{this.state.families.map((fam) => {
											console.log(fam.id, this.props.match.params.id)
											return (
												<option
													value={fam.id}
													selected={
														fam.id == 12 ? (
															true
														) : (
															false
														)
													}
												>
													{fam.serial_number}
												</option>
											);
										})}
									</select>
									<br />
								</MDBCol>
							</MDBRow>
							<br />
							<div className='family-info-container'>
								<span className='fi-label'>
									<strong>Family Code:</strong>
								</span>
								<span>{this.state.data.serial_number}</span>
								<br />
								<span className='fi-label'>
									<strong>Family Name:</strong>
								</span>
								<span>{this.state.data.family_name}</span>
								<br />
								<span className='fi-label'>
									<strong>Address:</strong>
								</span>
								<span>{this.state.data.address}</span>
								<br />
								<span className='fi-label'>
									<strong>No of members:</strong>
								</span>
								<span>{this.state.familyMembers.length} member(s)</span>
								<br />
								<span className='fi-label'>
									<strong>Date added:</strong>
								</span>
								<span>{new Date(this.state.data.createdAt).toDateString()}</span>
								<br />
							</div>
							<hr />
							<p>Family Member(s): {this.state.familyMembers.length} person</p>
							<table>
								<thead>
									<tr>
										<th>Family Code</th>
										<th>Last Name</th>
										<th>First Name</th>
										<th>Middle Name</th>
										<th>Suffix</th>
										<th>Gender</th>
										<th>Residential Address</th>
										<th>Contact Number</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody>
									{this.state.familyMembers.map((member) => {
										return (
											<PatientItem
												key={member.id}
												data={member}
												famCode={this.state.data.serial_number}
											/>
										);
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
