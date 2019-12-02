import React, { Component } from 'react';
import ConfirmDialog from './../../alerts/ConfirmDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../constants/images';
import General from '../../../../api_connections/General';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	onClick = async (id) => {
		await new General().destroy(id);
		window.location.reload();
	};

	renderData() {
		return this.props.data.map(item => {
			item.date = new Date(item.date).toDateString()
			return item
		}).map((item, index) => {
			return (
				<tr key={index}>
					{Object.values(item).map((col, index) => {
						if(index == 0) return
						return <td>{col}</td>;
					})}
					<td>
						{window.localStorage.getItem("ROLE") != "NURSE" &&<ConfirmDialog
							onClick={() => this.onClick(item.id)}
							message='Are you sure you want to delete this record?'
							title='Confirm'
						>
							<span className='delete-icon'>
								<FontAwesomeIcon icon={faTrash} />{' '}
							</span>
						</ConfirmDialog>}
						<span
							className='edit-icon'
							onClick={() => (window.location.href = '/treatment/general/' + item.id)}
						>
							<FontAwesomeIcon icon={faEdit} />\
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
						<th>Patient Code</th>
						<th>Patient Name</th>
						<th>Mode of Transaction</th>
						<th>Type of Consultation</th>
						<th>Nature of Visit</th>
						<th>Date of Consultation</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{this.renderData()}</tbody>
			</table>
		);
	}
}
