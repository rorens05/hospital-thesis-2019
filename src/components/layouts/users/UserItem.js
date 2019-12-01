import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ConfirmDialog from '../alerts/ConfirmDialog'
import images from '../../../constants/images'
import Patient from '../../../api_connections/UserAPI'

export default class PatientItem extends Component {

  onDeleteHandler = async() => {
    let response = await new Patient().destroy(this.props.data.id)
    console.log(response)
    window.location.reload()
  }

  render() {
    const {last_name,username,email,role, first_name, id} = this.props.data
    return (
      <tr className="hoverable-tr">
        <td>{username}</td>
        <td>{email}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{role}</td>
        <td>
          {/* <ConfirmDialog onClick={this.onDeleteHandler} message="Are you sure you want to delete this patient?" title="Confirm"><span className="delete-icon"><FontAwesomeIcon icon={faTrash}/> </span></ConfirmDialog> */}
          <span className="edit-icon"><FontAwesomeIcon icon={faEdit}  onClick={() => window.location.href = "/users/" + id}/> </span>
        </td>
      </tr>
    )
  }
}
