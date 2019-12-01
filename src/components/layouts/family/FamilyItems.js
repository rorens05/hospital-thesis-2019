import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ConfirmDialog from './../alerts/ConfirmDialog'
import Family from '../../../api_connections/Family';

export default class FamilyItems extends Component {
  
  constructor(props){
    super(props)
  }

  onClick = async() => {
    await new Family().destroy(this.props.family.id)
    window.location.reload()
  }

  render() {
    let {address, createdAt, family_name, id, no_of_members, serial_number} = this.props.family
    return (
      <tr className="hoverable-tr">
        <td>{serial_number}</td>
        <td>{family_name}</td>
        <td>{address}</td>
        <td>{this.props.count}</td>
        <td>{new Date(createdAt).toDateString()}</td>
        <td>
          {window.localStorage.getItem("ROLE") != "NURSE" &&<ConfirmDialog message="Are you sure you want to delete this family?" onClick={this.onClick} title="Confirm"><span className="delete-icon"><FontAwesomeIcon icon={faTrash}/> </span></ConfirmDialog>}
          <span className="edit-icon"  onClick={() => window.location.href = "/family/" + id}><FontAwesomeIcon icon={faEdit}/> </span>
        </td>
      </tr>
    )
  }
}
