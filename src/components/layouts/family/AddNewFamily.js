import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from 'mdbreact';
import Family from '../../../api_connections/Family';

export default class AddNewFamily extends Component {
	state = {
		modal2: false,
		data: {
			id: 0,
			serial_number: '',
			family_name: '',
			address: '',
			no_of_members: '0'
		}
	};

	componentDidMount = async() => {
		let response = await new Family().fetchAll()
		let fams = response.data.data

		if (this.props.data){
			this.setState({ data: this.props.data });
		} else{
			let serial = fams[fams.length - 1].serial_number
			console.log(serial)
			let number = serial.slice(-6)
			console.log(parseInt(number))
			let data = {
				serial_number: "FM-" + ("00000" + (parseInt(number) +1)).slice(-6),
				family_name: '',
				address: '',
				no_of_members: '0'
			}
			this.setState({data})
		}

	};

	componentDidUpdate(prevProps) {
		if (prevProps.data != this.props.data) {
			this.setState({ data: this.props.data });
		}
	}

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	onChange = (event) => {
		event = event.target;
		let { data } = this.state;
		data[event.name] = event.value;
		this.setState({ data });
	};

	onSubmit = async () => {
		if (this.state.data.id) {
			let response = await new Family().update(this.state.data);
			console.log(response);
			window.location.replace('/family/' + this.state.data.id);
		} else {
			let response = await new Family().create(this.state.data);
			console.log(response);
			window.location.replace('/family');
		}
	};

	render() {
		return (
			<span>
				<span onClick={this.toggle(2)}>
					<MDBBtn color='primary my-btn float-right' size='sm'>
						{!this.props.data ? 'Add New Family' : 'Update Family'}
					</MDBBtn>
				</span>
				<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
					<form action='#'>
						<MDBModalHeader toggle={this.toggle(2)}>
							{!this.props.data ? 'Add New Family' : 'Update Family'}
						</MDBModalHeader>
						<MDBModalBody>
							<MDBInput
								label='Family Code'
								name='serial_number'
								value={this.state.data.serial_number}
								readOnly
							/>
							<MDBInput
								label='Family Name'
								name='family_name'
								value={this.state.data.family_name}
								onChange={this.onChange}
							/>
							<MDBInput
								label='Family Address'
								name='address'
								value={this.state.data.address}
								onChange={this.onChange}
							/>
						</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn color='blue' onClick={this.toggle(2)}>
								Cancel
							</MDBBtn>
							<MDBBtn color='indigo darken-4' onClick={this.onSubmit}>
								Submit
							</MDBBtn>
						</MDBModalFooter>
					</form>
				</MDBModal>
			</span>
		);
	}
}
