import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Table from './Table'
import {MDBBtn} from 'mdbreact'
import Form from './Form'
import General from '../../../../api_connections/Dental'

export default class Index extends Component {
  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar dental/>
          <div className="content">
            <div className="header">
              <span>
                <img src={window.location.origin +  "/assets/images/dental.png"} alt="dental" className="pageIcon"/>
                New Dental
              </span>
            </div>
            <Form
            submit={async(patient) => {
              console.log(patient)
              console.log(await new General().create(patient), "this is response")
              window.location.replace('/treatment/dental')
            }}/>
          </div>
        </div>
      </div>
    )
  }
}
