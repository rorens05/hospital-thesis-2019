import React, { Component } from 'react';
import Navbar from './../../dashboard/Navbar';
import Sidebar from './../../dashboard/Sidebar';
import Table from './Table';
import { MDBBtn } from 'mdbreact';
import Form from './Form';
import General from '../../../../api_connections/maternal';

export default class Index extends Component {
	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar maternal />
					<div className='content'>
						<div className='header'>
							<span>
								<img
									src={window.location.origin + '/assets/images/maternal.png'}
									alt='general'
									className='pageIcon'
								/>
								New Maternal Checkup
							</span>
						</div>
						<Form
							submit={async (patient) => {
								console.log(patient);
								console.log(await new General().create(patient), 'this is response');
								window.location.replace('/treatment/maternal');
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
