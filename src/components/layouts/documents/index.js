import React, { Component } from 'react';
import Navbar from './../dashboard/Navbar';
import Sidebar from './../dashboard/Sidebar';
import { MDBContainer, MDBBtn } from 'mdbreact';
import CsvDownload from 'react-json-to-csv';

import General from '../../../api_connections/General';
import Maternal from '../../../api_connections/maternal';
import Tb from '../../../api_connections/Tb';
import Immunation from '../../../api_connections/Immunation';
import Dental from '../../../api_connections/Dental';
import Patient from '../../../api_connections/Patient';

import vac from '../../../assets/documents/vaccine-cert-converted.pdf'
import newMed from '../../../assets/documents/New-Medical-2019-converted.pdf'
import no from '../../../assets/documents/New-Medical-2019-NO-VT-converted.pdf'

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
      general: [],
			maternal: [],
			tuberculosis: [],
			immunation: [],
			dental: [],
			patient: []
		};
	}

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar print />
					<div className='content'>
						<div className='statistics-type-container border p-3'>
							<h1>Printed Certificates</h1>
							<hr />
							<a href={vac} target="_blank" data={this.state.general} filename='General.csv' className='btn btn-primary Ripple-parent'>
								Vaccine Certificate
							</a>
							<a href={newMed} target="_blank"  data={this.state.maternal} filename='Maternal.csv' className='btn btn-primary Ripple-parent'>
								New Medical Certificate
							</a>
							<a href={no} target="_blank"  data={this.state.dental} filename='dental.csv' className='btn btn-primary Ripple-parent'>
								New Medical Certificate No VT
							</a>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}
