import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Table from './Table'
import {MDBBtn} from 'mdbreact'
import Form from './Form'
import General from '../../../../api_connections/Tb'

export default class Index extends Component {
  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar tb/>
          <div className="content">
            <div className="header">
              <span>
                <img src={window.location.origin +  "/assets/images/tb.png"} alt="tb" className="pageIcon"/>
                New Tuberculosis Treatment Record
              </span>
            </div>
            <Form submit={async(patient) => {
              console.log(patient)
              console.log(await new General().create(patient), "this is response")
              window.location.replace('/treatment/tb')
            }} />
          </div>
        </div>
      </div>
    )
  }
}
