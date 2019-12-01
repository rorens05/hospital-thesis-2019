import React, { Component } from 'react'
import Sidebar from './../dashboard/Sidebar'
import Navbar from './../dashboard/Navbar'
import {MDBBtn} from 'mdbreact'
import Form from './Form'
import AddNewFamily from './../family/AddNewFamily'
import images from '../../../constants/images'
import PatientAPI from '../../../api_connections/Patient'
export class New extends Component {

  onSubmit = async(data) => {
    let response = await new PatientAPI().create(data)
    console.log(response)
    window.location.replace("/patients")
  }
  
  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar patient/>
          <div className="content">
            <div className="header">
              <span>
              <img src={images.PATIENT_ICON} alt="patient" className="pageIcon"/> Patient
              </span><br/>
              <Form onSubmit={this.onSubmit}>Add new patient</Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default New
