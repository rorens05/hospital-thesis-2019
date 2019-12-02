import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Table from './Table'
import {MDBBtn, MDBContainer} from 'mdbreact'
import doh from './../../../../assets/images/doh.png'

import General from '../../../../api_connections/maternal'
import Patient from '../../../../api_connections/Patient'
import Family from '../../../../api_connections/Family'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      general: {},
      patient: {},
      family: {},
      all: []
    }
  }

  componentDidMount = async() => {



    let generalRes = await new General().fetch(this.props.match.params.id)
    let general = generalRes.data.data
    let patientRes = await new Patient().fetch(general.patient_id)
    let patient = patientRes.data.data
    let familyRes = null
    let family = null
    if(patient){
       familyRes = await new Family().fetch(patient.family_id)
       family = familyRes.data.data
    }


    let all = await new General().fetchAll()
    all = all.data.data.filter(item => 
      item.patient_id == patient.id
    )

    console.log(all)

    this.setState({
      general, patient, family, all
    }, () => console.log(this.state))
    
  }
  render() {

    let {
      family_member,
      first_name,
      last_name,
      middle_name,
      category,
      residential_address,
      sex,
      suffix,
    } = this.state.patient

    let {serial_number} = this.state.family

    let {
      attending_provider,
      birth_outcome,
      blood_pressure,
      consulation_date,
      createdAt,
      diagnosis_date,
      expected_date,
      health_care_provider,
      height,
      id,
      lab_findings,
      last_mestruation_date,
      medical,
      number_of_children,
      patient_id,
      performed_laboratory_test,
      pregnancy_condition,
      temperature,
      type_of_delivery,
      updatedAt,
      weight,
    } = this.state.general

    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar maternal/>
          <div className="content">
            <div className="header">
              <span>
                <img src={window.location.origin +  "/assets/images/maternal.png"} alt="general" className="pageIcon"/>
                Maternal Checkup Information
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
                      Family Serial Number: <span className="ml-5">{serial_number}</span><br/>
											Patient code: <span className='pl-5 ml-5'>{category}</span>
                    </th> 
                  </tr>
                  <tr>
                    <th colSpan="4">I. PATIENT INFORMATION</th>
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
                    <th colSpan="4">II. DIAGNOSIS</th>
                  </tr>

                  <tr>
                    <td className="info-label">Date of First Consultation:</td>
                    <td className="info-data">{new Date(consulation_date).toDateString()}</td>
                    <td className="info-label">Date of Last Menstruation:</td>
                    <td className="info-data">{new Date(last_mestruation_date).toDateString()}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Blood pressure:</td>
                    <td className="info-data">{blood_pressure}</td>
                    <td className="info-label">Temperature:</td>
                    <td className="info-data">{temperature}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Height:</td>
                    <td className="info-data">{height}</td>
                    <td className="info-label">Weight:</td>
                    <td className="info-data">{weight}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Expected Date:</td>
                    <td className="info-data">{new Date(expected_date).toDateString()}</td>
                    <td className="info-label">Attending Provider:</td>
                    <td className="info-data">{attending_provider}</td>
                  </tr>
                  <tr>
                    <th colSpan="2">Diagnosis</th>
                    <td className="info-label">Date:</td>
                    <td className="info-data">{new Date(diagnosis_date).toDateString()}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Type of Delivery:</td>
                    <td className="info-data">{type_of_delivery}</td>
                    <td className="info-label">Birth Outcome:</td>
                    <td className="info-data">{birth_outcome}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Number of Children Delivered</td>
                    <td className="info-data">{number_of_children}</td>
                    <td className="info-label">Pregnancy-related Conditions/Complications:</td>
                    <td className="info-data">{pregnancy_condition}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Medication/Treatment:</td>
                    <td className="info-data" colSpan="3">{medical}</td>
                  </tr>
                  <tr>
                    <td className="info-label">Laboratory Findings / Impression</td>
                    <td className="info-data" colSpan="3">{lab_findings} </td>
                  </tr>
                  <tr>
                    <th colSpan="4" className="p0 border-gray-1px"/>
                  </tr>

                  <tr>
                    <th colSpan="4">III. HISTORY OF PREGNANCY</th>
                  </tr>
                  {
                    this.state.all.map(item => {
                      return (
                        <>
                      <tr>
                        <th colSpan="2">1st Pregnancy</th>
                        <td className="info-label">Date:</td>
                        <td className="info-data">{new Date(item.diagnosis_date).toDateString()}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Type of Delivery:</td>
                        <td className="info-data">{item.type_of_delivery}</td>
                        <td className="info-label">Birth Outcome:</td>
                        <td className="info-data">{item.birth_outcome}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Number of Children Delivered</td>
                        <td className="info-data">{item.number_of_children}</td>
                        <td className="info-label">Pregnancy-related Conditions/Complications:</td>
                        <td className="info-data">{item.pregnancy_condition}</td>
                      </tr>
                      <tr>
                        <th colSpan="4" className="p0 border-gray-1px"/>
                      </tr>
                      
                      <tr>
                        <td className="info-label">Health Care Provider:</td>
                        <td className="info-data">Dr. Strange</td>
                        <td className="info-label">Performed Laboratory Test:</td>
                        <td className="info-data">Dr. Strange</td>
                      </tr>
                      </>
                      )
                    })
                  }
                </tbody>
              </table>
              <MDBBtn size="sm" color="info" onClick={() => window.print()}>Print</MDBBtn>
              {window.localStorage.getItem("ROLE") != "NURSE" &&<MDBBtn size="sm" color="primary" onClick={() => window.location.href = "/treatment/maternal/" + this.props.match.params.id + "/edit"}>Edit</MDBBtn>}
            </MDBContainer>
          </div>
        </div>
      </div>
    )
  }
}
