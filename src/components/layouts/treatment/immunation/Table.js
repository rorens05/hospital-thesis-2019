import React, { Component } from 'react';
import ConfirmDialog from './../../alerts/ConfirmDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import General from '../../../../api_connections/Immunation';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					family_no: 'SN-02323',
					name: 'Sample name',
					mother: 'Sample Mom',
					father: 'Sample Dad',
					birthdate: 'New California, USA',
					birthplace: 'February 24, 1955'
				}
			]
		};
	}

	componentDidUpdate = () => {
		console.log(this.props.data, 'this is table data');
	};
	
	renderData() {
		return this.props.data.map(item => {
			item.birthdate = new Date(item.birthdate).toDateString()
			return item
		}).map((item) => {
			return (
				<tr>
					{Object.values(item).map((col, index) => {
						if(index == 0) return 
						return <td>{col}</td>;
					})}
					<td>
						{window.localStorage.getItem('ROLE') != 'NURSE' && (
							<ConfirmDialog
								onClick={async () => {
									await new General().destroy(item.id);
									window.location.reload();
								}}
								message='Are you sure you want to delete this record?'
								title='Confirm'
							>
								<span className='delete-icon'>
									<FontAwesomeIcon icon={faTrash} />{' '}
								</span>
							</ConfirmDialog>
						)}
						<span
							className='edit-icon'
							onClick={() => (window.location.href = '/treatment/immunation/' + item.id)}
						>
							<FontAwesomeIcon icon={faEdit} />{' '}
						</span>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Family No.</th>
						<th>Patient_cdde</th>
						<th>Child name</th>
						<th>Mother's name</th>
						<th>Fathers's name</th>
						<th>Date of birth</th>
						<th>Place of birth</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{this.renderData()}</tbody>
			</table>
		);
	}
}
