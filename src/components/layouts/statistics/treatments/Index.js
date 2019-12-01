import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { MDBContainer, MDBInput, MDBFormInline } from 'mdbreact';
import General from '../../../../api_connections/General';
import Maternal from '../../../../api_connections/maternal';
import Tb from '../../../../api_connections/Tb';
import Immunation from '../../../../api_connections/Immunation';
import Dental from '../../../../api_connections/Dental';

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
			isLoading: false,
			isBar: false,
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

		this.setState({
			data: { general, maternal, tuberculosis, immunation, dental },
			showData: { general, maternal, tuberculosis, immunation, dental }
		});

		this.setupData()

		this.handleRenderBars();
	};

	setupData = () => {
		Object.keys(this.state.showData).map(key=>{
			this.updateData(key, this.state.showData[key])
		})
	}

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
				<h5 className='mt-3'>Other options</h5>
				<MDBFormInline>
					<input type='checkbox' name='radio2' className='ml-3 mr-2' />
					<label>Male</label>
					<input type='checkbox' name='radio2' className='ml-3 mr-2' />
					<label>Female</label>
				</MDBFormInline>

				<h5 className='mt-3'>Chart type</h5>
				<MDBFormInline>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>All</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>0-12 Months</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>1-5 Years</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>6-10 Years</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>10-14 Years</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>15-19 Years</label>

					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>20-49 Years</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>50-60 Years</label>
					<input
						type='radio'
						name='radio'
						className='ml-3 mr-2'
						checked={!this.state.ageAll}
						onChange={this.handleChartChange}
					/>
					<label>60 Years and up</label>
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
