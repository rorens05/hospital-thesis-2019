import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ConfirmDialog from './../alerts/ConfirmDialog'
import images from '../../../constants/images'
import Patient from '../../../api_connections/Patient'

export default class PatientItem extends Component {

  onDeleteHandler = async() => {
    let response = await new Patient().destroy(this.props.data.id)
    console.log(response)
    window.location.reload()
  }

  render() {
    const {last_name, first_name, middle_name, suffix, sex, residential_address, contact_number, id, category} = this.props.data
    return (
      <tr className="hoverable-tr">
        <td>{this.props.famCode}</td>
        <td>{category}</td>
        <td>{last_name}</td>
        <td>{first_name}</td>
        <td>{middle_name}</td>
        <td>{suffix}</td>
        <td>{sex}</td>
        <td>{residential_address}</td>
        <td>{contact_number}</td>
        <td>
          {window.localStorage.getItem("ROLE") != "NURSE" &&<ConfirmDialog onClick={this.onDeleteHandler} message="Are you sure you want to delete this patient?" title="Confirm"><span className="delete-icon"><FontAwesomeIcon icon={faTrash}/> </span></ConfirmDialog>}
          <span className="edit-icon"><FontAwesomeIcon icon={faEdit}  onClick={() => window.location.href = "/patients/" + id}/> </span>
        </td>
      </tr>
    )
  }
}
