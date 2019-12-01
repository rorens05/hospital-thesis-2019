import React, { Component } from 'react'
import Sidebar from '../dashboard/Sidebar'
import Navbar from '../dashboard/Navbar'
import {MDBBtn, MDBContainer} from 'mdbreact'
import Form from './Form'
import AddNewFamily from '../family/AddNewFamily'
import doh from './../../../assets/images/doh.png'
import images from '../../../constants/images'
import Patient from '../../../api_connections/UserAPI'
import Family from '../../../api_connections/Family'

export class PatientInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount = async () => {
    let data = await new Patient().fetch(this.props.match.params.id);
    this.setState({data: data.data.data, }, () => console.log(this.state))
  }

  render() {
    let {
      role,
      first_name,
      last_name,
      email,
      username,
    } = this.state.data
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
					<Sidebar user />
          <div className="content">
            <div className="header">
              <span>
              <img src={images.USER_ICON} alt="patient" className="pageIcon"/> User Information
              </span>
            </div>
            <MDBContainer className="info-coupon">
              <table className="info-table">
                <thead>
                  
                  <tr>
                    <th colSpan="4">USER INFORMATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="info-label">First Name:</td>
                    <td className="info-data">{first_name}</td>
                    <td className="info-label">Last Name:</td>
                    <td className="info-data">{last_name}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Username:</td>
                    <td className="info-data">{username}</td>
                    <td className="info-label">Email:</td>
                    <td className="info-data">{email}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Role:</td>
                    <td className="info-data">{role}</td>
                    
                  </tr>
                </tbody>
              </table>
              <MDBBtn size="sm" color="info"  onClick={() => window.print()}>Print</MDBBtn>
              <MDBBtn size="sm" color="primary" onClick={() => window.location.href = `/users/${this.props.match.params.id}/edit`}>Edit</MDBBtn>

              
            </MDBContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientInfo
