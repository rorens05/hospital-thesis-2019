import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { MDBContainer, MDBInput, MDBFormInline } from 'mdbreact';
import General from '../../../../api_connections/General';
import Maternal from '../../../../api_connections/maternal';
import Tb from '../../../../api_connections/Tb';
import Immunation from '../../../../api_connections/Immunation';
import Dental from '../../../../api_connections/Dental';
import Patient from '../../../../api_connections/Patient';

export class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedState: {
				general: true,
				maternal: true,
				tuberculosis: true,
				immunation: true,
				dental: true
			},
			patients: [],
			isLoading: false,
			isBar: false,
			isMale: true,
			isFemale: true,
			age1: true,
			age2: true,
			age3: true,
			age4: true,
			data: {
				general: [],
				maternal: [],
				tuberculosis: [],
				immunation: [],
				dental: []
			},
			showData: {
				general: [],
				maternal: [],
				tuberculosis: [],
				immunation: [],
				dental: []
			},
			general: {
				label: 'General',
				data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)),
				backgroundColor: 'rgba(10, 255, 75,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(10, 255, 75, 1)'
			},
			maternal: {
				label: 'Maternal',
				// data: [ 12, 19, 3, 5, 5, 3 ],
				data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)),
				backgroundColor: 'rgba(255, 234, 5,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(255, 234, 5, 1)'
			},
			tuberculosis: {
				label: 'Tuberculosis',
				// data: [ 12, 19, 3, 5, 5, 3 ],
				data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)),
				backgroundColor: 'rgba(245, 0, 90,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(245, 0, 90, 1)'
			},
			immunation: {
				label: 'Immunation',
				// data: [ 12, 19, 3, 5, 5, 3 ],
				data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)),
				backgroundColor: 'rgba(2, 192, 245,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(2, 192, 245, 1)'
			},
			dental: {
				label: 'Dental',
				// data: [ 12, 19, 3, 5, 5, 3 ],
				data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)),
				backgroundColor: 'rgba(7, 84, 237,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(7, 84, 237, 1)'
			},

			dataBar: {
				labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
				datasets: []
			}
		};
	}

	componentDidMount = async () => {
		let general = (await new General().fetchAll()).data.data;
		let maternal = (await new Maternal().fetchAll()).data.data;
		let tuberculosis = (await new Tb().fetchAll()).data.data;
		let immunation = (await new Immunation().fetchAll()).data.data;
		let dental = (await new Dental().fetchAll()).data.data;
		let patients = (await new Patient().fetchAll()).data.data;

		this.setState({
			data: { general, maternal, tuberculosis, immunation, dental },
			showData: { general, maternal, tuberculosis, immunation, dental },
			patients
		});
		this.setupData();
		this.handleRenderBars();
	};

	updateGender = async (gender) => {
		switch (gender) {
			case 'MALE':
				this.setState({ isMale: !this.state.isMale }, () => {
					this.updateShowData();
				});
				break;
			case 'FEMALE':
				this.setState({ isFemale: !this.state.isFemale }, () => {
					this.updateShowData();
				});
				break;
			case 'ONE':
				this.setState({ age1: !this.state.age1 }, () => {
					this.updateShowData();
				});
				break;
			case 'TWO':
				this.setState({ age2: !this.state.age2 }, () => {
					this.updateShowData();
				});
				break;
			case 'THREE':
				this.setState({ age3: !this.state.age3 }, () => {
					this.updateShowData();
				});
				break;
			case 'FOUR':
				this.setState({ age4: !this.state.age4 }, () => {
					this.updateShowData();
				});
				break;
		}
	};

	updateShowData() {
		let { data, isMale, isFemale, patients, age1, age2, age3, age4 } = this.state;

		console.log({ data, patients });
		let showData = {};

		if (isMale && isFemale) {
			showData = data;
		} else {
			if (isMale) {
				let general = data.general.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Male';
				});
				let maternal = data.maternal.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Male';
				});
				let tuberculosis = data.tuberculosis.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Male';
				});
				let immunation = data.immunation.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Male';
				});
				let dental = data.dental.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Male';
				});
				showData = { general, maternal, tuberculosis, immunation, dental };
			}
			if (isFemale) {
				let general = data.general.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Female';
				});
				let maternal = data.maternal.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Female';
				});
				let tuberculosis = data.tuberculosis.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Female';
				});
				let immunation = data.immunation.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Female';
				});
				let dental = data.dental.filter((item) => {
					let patient = this.getPatientInfo(item.patient_id);
					return patient.sex == 'Female';
				});
				showData = { general, maternal, tuberculosis, immunation, dental };
			}
		}

		console.log({ showData, isMale, isFemale });


		let general = []
		let maternal = []
		let tuberculosis = []
		let dental = []
		let immunation = []

		if(age1 && age2 && age3 && age4){
			showData = showData
		}else{
			if(age1){
				console.log("this is age 1")
				let startDate = new Date()
				startDate.setFullYear((new Date().getFullYear()) - 1)			
				let endDate = new Date()
				endDate.setFullYear((new Date().getFullYear()))	

				showData.general.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						general.push(item)
					}
				})

				showData.maternal.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						maternal.push(item)
					}
				})

				showData.dental.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						dental.push(item)
					}
				})

				showData.tuberculosis.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						tuberculosis.push(item)
					}
				})

				showData.immunation.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						immunation.push(item)
					}
				})
			}
			
			if(age2){
				console.log("this is age 2")
				let startDate = new Date()
				startDate.setFullYear((new Date().getFullYear()) - 20)			
				let endDate = new Date()
				endDate.setFullYear((new Date().getFullYear()) - 1)	

				showData.general.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						general.push(item)
					}
				})

				showData.maternal.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						maternal.push(item)
					}
				})

				showData.dental.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						dental.push(item)
					}
				})

				showData.tuberculosis.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						tuberculosis.push(item)
					}
				})

				showData.immunation.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						immunation.push(item)
					}
				})
			}
			
			if(age3){
				console.log("this is age 2")
				let startDate = new Date()
				startDate.setFullYear((new Date().getFullYear()) - 60)			
				let endDate = new Date()
				endDate.setFullYear((new Date().getFullYear()) - 20)	

				showData.general.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						general.push(item)
					}
				})

				showData.maternal.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						maternal.push(item)
					}
				})

				showData.dental.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						dental.push(item)
					}
				})

				showData.tuberculosis.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						tuberculosis.push(item)
					}
				})

				showData.immunation.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						immunation.push(item)
					}
				})
			}
			
			if(age4){
				console.log("this is age 2")
				let startDate = new Date()
				startDate.setFullYear((new Date().getFullYear()) - 200)			
				let endDate = new Date()
				endDate.setFullYear((new Date().getFullYear()) - 60)	

				showData.general.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						general.push(item)
					}
				})

				showData.maternal.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						maternal.push(item)
					}
				})

				showData.dental.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						dental.push(item)
					}
				})

				showData.tuberculosis.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						tuberculosis.push(item)
					}
				})

				showData.immunation.map(item => {
					let patient = this.getPatientInfo(item.patient_id);					
					let birthday = new Date(patient.birthday)
					if(birthday > startDate && birthday < endDate){
						immunation.push(item)
					}
				})
			}
			showData = {
				general, maternal, tuberculosis, immunation, dental
			}
		}


		console.log({showData, age1, age2, age3, general, maternal, dental, tuberculosis, immunation})
		
		this.setState(
			{
				showData
			},
			() => {
				this.setupData();
				this.handleRenderBars();
			}
		);
	}

	getPatientInfo(id) {
		let patient = {};
		this.state.patients.map((p) => {
			if (id == p.id) {
				patient = p;
			}
		});
		return patient;
	}

	setupData = () => {
		Object.keys(this.state.showData).map((key) => {
			this.updateData(key, this.state.showData[key]);
		});
	};

	updateData = (key, response) => {
		let data = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		response.map((g) => {
			data[new Date(g.createdAt).getMonth()] = data[new Date(g.createdAt).getMonth()] + 1;
		});

		let temp = this.state[key];
		temp.data = data;

		this.setState({ [key]: temp });
	};

	handleOnSelected = ({ target }) => {
		console.log({ name: target.name, value: target.value });
		let { selectedState } = this.state;
		selectedState[target.name] = !selectedState[target.name];
		this.setState({ selectedState }, this.handleRenderBars);
	};

	handleRenderBars = () => {
		let { dataBar, selectedState } = this.state;
		let datasets = [];
		if (selectedState.general) datasets.push(this.state.general);
		if (selectedState.maternal) datasets.push(this.state.maternal);
		if (selectedState.tuberculosis) datasets.push(this.state.tuberculosis);
		if (selectedState.immunation) datasets.push(this.state.immunation);
		if (selectedState.dental) datasets.push(this.state.dental);
		dataBar.datasets = datasets;
		this.setState({ isLoading: true }, () => {
			this.setState({ dataBar }, () => this.setState({ isLoading: false }));
		});
	};

	handleChartChange = () => {
		this.setState({ isBar: !this.state.isBar });
	};

	render() {
		return (
			<MDBContainer fluid>
				<h3 className='mt-1'>Treatment statistics</h3>
				<hr />
				<h5>Customize Report</h5>
				<MDBFormInline>
					<input
						type='checkbox'
						name='general'
						className='ml-3 mr-2'
						onChange={this.handleOnSelected}
						checked={this.state.selectedState.general}
					/>
					<label>General</label>
					<input
						type='checkbox'
						name='maternal'
						className='ml-3 mr-2'
						onChange={this.handleOnSelected}
						checked={this.state.selectedState.maternal}
					/>
					<label>Maternal</label>
					<input
						type='checkbox'
						name='tuberculosis'
						className='ml-3 mr-2'
						onChange={this.handleOnSelected}
						checked={this.state.selectedState.tuberculosis}
					/>
					<label>Tuberculosis</label>
					<input
						type='checkbox'
						name='immunation'
						className='ml-3 mr-2'
						onChange={this.handleOnSelected}
						checked={this.state.selectedState.immunation}
					/>
					<label>Immunation</label>
					<input
						type='checkbox'
						name='dental'
						className='ml-3 mr-2'
						onChange={this.handleOnSelected}
						checked={this.state.selectedState.dental}
					/>
					<label>Dental</label>
				</MDBFormInline>
				<h5 className='mt-3'>Chart type</h5>
				<MDBFormInline>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.isBar}
						onChange={this.handleChartChange}
					/>
					<label>Bar chart</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={this.state.isBar}
						onChange={this.handleChartChange}
					/>
					<label>Line chart</label>
				</MDBFormInline>
				<h5 className='mt-3'>Gender options</h5>
				<MDBFormInline>
					<input
						type='checkbox'
						checked={this.state.isMale}
						name='radio2'
						className='ml-3 mr-2'
						onChange={() => {
							this.updateGender('MALE');
						}}
					/>
					<label>Male</label>
					<input
						type='checkbox'
						checked={this.state.isFemale}
						name='radio2'
						className='ml-3 mr-2'
						onChange={() => {
							this.updateGender('FEMALE');
						}}
					/>
					<label>Female</label>
				</MDBFormInline>

				<h5 className='mt-3'>Age options</h5>
				<MDBFormInline>
					<input
						type='checkbox'
						name='checkbox'
						className='ml-3 mr-2'
						checked={this.state.age1}
						onChange={() => {
							this.updateGender('ONE');
						}}
					/>
					<label>0-12 Months</label>
					<input
						type='checkbox'
						name='checkbox'
						className='ml-3 mr-2'
						checked={this.state.age2}
						onChange={() => {
							this.updateGender('TWO');
						}}
					/>
					<label>1-20 Years</label>
					<input
						type='checkbox'
						name='checkbox'
						className='ml-3 mr-2'
						checked={this.state.age3}
						onChange={() => {
							this.updateGender('THREE');
						}}
					/>
					<label>21-60 Years</label>
					<input
						type='checkbox'
						name='checkbox'
						className='ml-3 mr-2'
						checked={this.state.age4}
						onChange={() => {
							this.updateGender('FOUR');
						}}
					/>
					<label>61 Years and above</label>
				</MDBFormInline>
				<hr />
				{!this.state.isLoading && (
					<MDBContainer fluid className='mt-5'>
						{this.state.isBar ? <Line data={this.state.dataBar} /> : <Bar data={this.state.dataBar} />}
					</MDBContainer>
				)}
			</MDBContainer>
		);
	}
}

export default Index;
