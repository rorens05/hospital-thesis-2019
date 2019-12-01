import React, { Component } from 'react'
import Sidebar from './../dashboard/Sidebar'
import Navbar from './../dashboard/Navbar'
import {MDBBtn} from 'mdbreact'
import Form from './Form'
import AddNewFamily from './../family/AddNewFamily'
import images from '../../../constants/images'
import PatientAPI from '../../../api_connections/UserAPI'
export class New extends Component {

  onSubmit = async(data) => {
    let response = await new PatientAPI().create(data)
    console.log(response)
    if(response.data.status === 'error'){
      alert(response.data.message)
    }else{
     window.location.replace("/users")

    }
  }
  
  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
					<Sidebar user />
          <div className="content">
            <div className="header">
              <span>
              <img src={images.USER_ICON} alt="patient" className="pageIcon"/> Users
              </span><br/>
              <Form onSubmit={this.onSubmit}>Add new user</Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default New
