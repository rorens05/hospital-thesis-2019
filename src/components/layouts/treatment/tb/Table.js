import React, { Component } from 'react';
import ConfirmDialog from './../../alerts/ConfirmDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import General from '../../../../api_connections/Tb';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					family_no: 'SN-023845',
					name: 'Steve Jobs',
					mode: 'Walk-in',
					nature: 'New Admission',
					date: 'January 2, 2019'
				}
			]
		};
	}

	renderData() {
		return this.props.data.map(item => {
			item.date = new Date(item.date).toDateString()
			return item
		}).map((item) => {
			return (
				<tr>
					{Object.values(item).map((col) => {
						return <td>{col}</td>;
					})}
					<td>
						{window.localStorage.getItem("ROLE") != "NURSE" &&
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
						</ConfirmDialog>}
						<span className='edit-icon' onClick={() => (window.location.href = '/treatment/tb/' + item.id)}>
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
						<th>#</th>
						<th>Family No.</th>
						<th>Patient Name</th>
						<th>Source</th>
						<th>Region Province</th>
						<th>Date of Consultation</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{this.renderData()}</tbody>
			</table>
		);
	}
}
