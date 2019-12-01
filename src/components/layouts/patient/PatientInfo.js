import React, { Component } from 'react'
import Sidebar from './../dashboard/Sidebar'
import Navbar from './../dashboard/Navbar'
import {MDBBtn, MDBContainer} from 'mdbreact'
import Form from './Form'
import AddNewFamily from './../family/AddNewFamily'
import doh from './../../../assets/images/doh.png'
import images from '../../../constants/images'
import Patient from '../../../api_connections/Patient'
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
    let family_id = data.data.data.family_id
    let family_response = await new Family().fetch(family_id)
    console.log(family_response)
    this.setState({data: data.data.data, family_id: family_response.data.data.serial_number}, () => console.log(this.state))
  }

  render() {
    let {
      birth_place,
      birthday,
      category,
      civil_status,
      contact_number,
      createdAt,
      educational_attainment,
      employment_status,
      facility_household_number,
      family_id,
      family_member,
      first_name,
      id,
      last_name,
      middle_name,
      philhealth_member,
      philhealth_no,
      residential_address,
      sex,
      status_type,
      suffix,
      updatedAt,
    } = this.state.data
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar patient/>
          <div className="content">
            <div className="header">
              <span>
              <img src={images.PATIENT_ICON} alt="patient" className="pageIcon"/> Patient Information
              </span>
            </div>
            <MDBContainer className="info-coupon">
              <table className="info-table">
                <thead>
                  <tr>
                    <th colSpan="2" className="doh-header">
                      <img src={doh} alt="DOH"/>
                      <small className="doh-sub-title">Republic of the Philippines</small><br/>
                      <span className="doh-title">Department of Health</span><br/>
                      <small className="doh-sub-title">Kagawaran ng Kalusugan</small><br/>
                    </th>
                    <th colSpan="2" className="pl-3">
                      Serial number: <span className="ml-5">{ this.state.family_id }</span><br/>
                      Family number: <span className="ml-5">{ category }</span><br/>
                    </th> 
                  </tr>
                  <tr>
                    <th colSpan="4">PATIENT INFORMATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="info-label">Last Name:</td>
                    <td className="info-data">{last_name}</td>
                    <td className="info-label">Suffix:</td>
                    <td className="info-data">{suffix}</td>
                  </tr>
                  <tr>
                    <td className="info-label">First Name:</td>
                    <td className="info-data">{first_name}</td>
                    <td className="info-label">Middle Name:</td>
                    <td className="info-data">{middle_name}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Sex:</td>
                    <td className="info-data">{sex}</td>
                    <td className="info-label">Residential Address:</td>
                    <td className="info-data">{residential_address}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Birthday:</td>
                    <td className="info-data">{birthday}</td>
                    <td className="info-label">Birth place:</td>
                    <td className="info-data">{birth_place}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Civil Status:</td>
                    <td className="info-data">{civil_status}</td>
                    <td className="info-label">Educational Attainment:</td>
                    <td className="info-data">{educational_attainment}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Employment Status:</td>
                    <td className="info-data">{employment_status}</td>
                    <td className="info-label">Family Member:</td>
                    <td className="info-data">{family_member}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Contact Number:</td>
                    <td className="info-data">{contact_number}</td>
                    <td className="info-label">Facility Household No:</td>
                    <td className="info-data">{facility_household_number}</td>
                  </tr>
                  <tr>
                    <td className="info-label">PhilHealth Member:</td>
                    <td className="info-data">{philhealth_member}</td>
                    <td className="info-label">Status Type:</td>
                    <td className="info-data">{status_type}</td>
                  </tr>
                  <tr>
                    <td className="info-label">PhilHealth No:</td>
                    <td colSpan="3" className="info-data">{philhealth_no}</td>
                    
                  </tr>
                </tbody>
              </table>
              <MDBBtn size="sm" color="info"  onClick={() => window.print()}>Print</MDBBtn>
              {window.localStorage.getItem("ROLE") != "NURSE" &&<MDBBtn size="sm" color="primary" onClick={() => window.location.href = `/patients/${this.props.match.params.id}/edit`}>Edit</MDBBtn>}

              
            </MDBContainer>
            {/* <MDBContainer className="info-coupon">
              <div className="table-container">
                <h3>Treatment Records</h3>
                <p>Total Record(s): 5 records</p>
                <table>
                  <thead>
                    <tr>
                      <th>Date of Consultation</th>
                      <th>Purpose of Consultation</th>
                      <th>Nature of visit</th>
                      <th>Mode of Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>June 20, 2019</td>
                      <td>Injury</td>
                      <td>New Admission</td>
                      <td>Walk-in</td>
                    </tr>
                    <tr>
                      <td>Febuary 8, 2018</td>
                      <td>Dental</td>
                      <td>New Consultation/Case</td>
                      <td>Visited</td>
                    </tr>
                    <tr>
                      <td>June 29, 2019</td>
                      <td>Child Care</td>
                      <td>Follow-up visit</td>
                      <td>Walk-in</td>
                    </tr>
                    <tr>
                      <td>May 9, 2018</td>
                      <td>Adult Immunization</td>
                      <td>New Consultation/Case</td>
                      <td>Visited</td>
                    </tr>
                    <tr>
                      <td>June 20, 2019</td>
                      <td>General</td>
                      <td>New Admission</td>
                      <td>Walk-in</td>
                    </tr>
                    <tr>
                      <td>May 9, 2018</td>
                      <td>Injury</td>
                      <td>New Consultation/Case</td>
                      <td>Visited</td>
                    </tr>
                  </tbody>
                </table>              

                </div>
            </MDBContainer> */}
          </div>
        </div>
      </div>
    )
  }
}

export default PatientInfo
