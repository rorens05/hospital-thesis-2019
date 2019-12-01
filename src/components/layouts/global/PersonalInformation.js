import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PatientAPI from '../../../api_connections/Patient'

export class PersonalInformation extends Component {

  constructor(props){
    super(props)
    this.state = {
      patients: [],
      selectedItem: {}
    }
  }

  componentDidMount = async () => {
    let response = await new PatientAPI().fetchAll()
    let patients = response.data.data
    console.log(patients, "this is patient")
    this.props.onChange(patients.length > 0 ? patients[0].id : "0")
    this.setState({patients: patients, selectedItem: patients.length ? patients[0] : {}})
  }

  render() {
    const {patients, selectedItem} = this.state
    return (
      <div>
        <MDBRow>
          <MDBCol sm="12">
            <label htmlFor=""><small className="text-primary font-weight-light">Choose patient</small></label>
              <select className="custom-select default-select" onChange={(event) => {
                this.state.patients.forEach( patient => {
                  if(event.target.value == patient.id){
                    this.props.onChange(event.target.value)
                    this.setState({selectedItem: patient})
                  }
                });
              }}>

                {
                  patients.map(patient => {
                    return (
                      <option value={patient.id} key={patient.id}>{patient.first_name + " " + patient.last_name}</option>
                    )
                  })
                }

              </select>            
          </MDBCol>
        </MDBRow><br/>
        <MDBRow>
          <MDBCol sm="6">
            <MDBInput label="Last Name" readOnly value={selectedItem.last_name}  />
          </MDBCol>
          <MDBCol sm="6">
            <MDBInput label="First Name" readOnly value={selectedItem.first_name}  />
          </MDBCol>       
        </MDBRow>
        <MDBRow>
          <MDBCol sm="6">
            <MDBInput label="Middle Name" readOnly value={selectedItem.middle_name}  />
          </MDBCol>
          <MDBCol sm="6">
            <MDBInput label="Suffix (e.g. Jr., Sr., III)" readOnly value={selectedItem.suffix}  />
          </MDBCol>     
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12">
            <MDBInput label="Residential Address" readOnly value={selectedItem.residential_address}/>
          </MDBCol> 
        </MDBRow>
      </div>
    )
  }
}

export default PersonalInformation
