import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn } from 'mdbreact';
import Form from './Form';
import General from '../../../../api_connections/Immunation'

export default class Index extends Component {
	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar immunation />
					<div className='content'>
						<div className='header'>
							<span>
								<img
									src={window.location.origin + '/assets/images/immu.png'}
									alt='immu'
									className='pageIcon'
								/>
								New Immunization
							</span>
						</div>
						<Form
							submit={async (patient) => {
								console.log(patient);
								console.log(await new General().create(patient), 'this is response');
								window.location.replace('/treatment/immunation');
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
