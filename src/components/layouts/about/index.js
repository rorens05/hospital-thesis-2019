import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
export class Home extends Component {
	

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar about />

					<div className='content'>
						<div className='statistics-type-container border p-3'>
              <img src={require('../../../assets/images/about.png')} className="about-image"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
