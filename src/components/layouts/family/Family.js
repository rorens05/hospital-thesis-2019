import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
import FamilyItem from './FamilyItems';
import AddNewFamily from './AddNewFamily';
import images from '../../../constants/images';
import FamilyAPI from '../../../api_connections/Family';
import PatientAPI from '../../../api_connections/Patient';

export default class Family extends Component {

	constructor(props){
		super(props)
		this.state = {
			families: [],
			patients: []
		}
	}

	componentDidMount = async () =>{
		let response = await new FamilyAPI().fetchAll()
		let patients = await new PatientAPI().fetchAll()
		console.log(response.data.data)
		this.setState({families: response.data.data, patients: patients.data.data, })
	}

	getMemberCount = (id) => {
		let count = 0;
		this.state.patients.map(patient => {
			if(id == patient.family_id){
				count++
			}
		})
		return count
	}

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar family />
					<div className='content'>
						<div className='header'>
							<span>
								<img src={images.FAMILY_ICON} alt='family' className='pageIcon' />
								Family Record
								{ window.localStorage.getItem("ROLE") != "NURSE" && <AddNewFamily />}
							</span>
						</div>
						<div className='table-container'>
							<p>Total Record(s): {this.state.families.length} records</p>
							<table>
								<thead>
									<tr>
										<th>Family Code</th>
										<th>Family Name</th>
										<th>Address</th>
										<th>No of members</th>
										<th>Date added</th>
										<th>Options</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.families.map(item => {
											return <FamilyItem family={item} key={item.id} count={this.getMemberCount(item.id)}/>
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
