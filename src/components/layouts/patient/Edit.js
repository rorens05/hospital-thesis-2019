import React, { Component } from 'react';
import Sidebar from './../dashboard/Sidebar';
import Navbar from './../dashboard/Navbar';
import { MDBBtn } from 'mdbreact';
import Form from './Form';
import AddNewFamily from './../family/AddNewFamily';
import images from '../../../constants/images';
import PatientAPI from '../../../api_connections/Patient';
export class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	componentDidMount = async () => {
    let response = await new PatientAPI().fetch(this.props.match.params.id);
    this.setState({ data: response.data.data });
	};

  onSubmit = async (data) => {
    let response = await new PatientAPI().update(data);
    console.log(response)
    window.location.replace(`/patients/${this.props.match.params.id}`)

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
								<img src={images.PATIENT_ICON} alt='patient' className='pageIcon' />
								Patient
							</span>
							<br />
							<Form data={this.state.data} onSubmit={this.onSubmit}>Edit patient</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Edit;
