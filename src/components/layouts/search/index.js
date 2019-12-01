import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
import Patient from '../../../api_connections/Patient';
import Family from '../../../api_connections/Family';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientResult: [],
			familyResult: []
		};
	}

	componentDidMount = async () => {
		let patients = (await new Patient().fetchAll()).data.data;
		let families = (await new Family().fetchAll()).data.data;

		console.log({ patients, families });
		let search = new URLSearchParams(window.location.search).get('search');

		let patientFilter = patients.filter((p) => {
			return (
				p.first_name.toLowerCase().includes(search.toLowerCase()) ||
				p.last_name.toLowerCase().includes(search.toLowerCase()) ||
				p.family_member.toLowerCase().includes(search.toLowerCase()) ||
				p.residential_address.toLowerCase().includes(search.toLowerCase())
			);
		});

    console.log(patientFilter);

    this.setState({patientResult: patientFilter})
    
	};

	render() {
		return (
			<div className='main-body'>
				<Navbar />
				<div className='flex-container'>
					<Sidebar home />

					<div className='content'>
						<div className='statistics-type-container border p-3'>
							<h1>Search Result</h1>
							<hr />
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
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
