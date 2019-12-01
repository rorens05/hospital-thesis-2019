import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Form from './Form'
import images from '../../../../constants/images'
import General from '../../../../api_connections/General'
export default class Index extends Component {
  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar diseases/>
          <div className="content">
            <div className="header">
              <span>
              <img src={images.DISEASE_ICON} alt="general" className="pageIcon"/>
                New General Checkup
              </span>
            </div>
            <Form submit={async(patient) => {
              console.log(patient)
              await new General().create(patient)
              window.location.replace('/treatment/general')
            }} />
          </div>
        </div>
      </div>
    )
  }
}
