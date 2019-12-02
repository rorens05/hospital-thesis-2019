import React, { Component } from 'react'
import ConfirmDialog from './../alerts/ConfirmDialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
export default class Table extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "MATERNAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Elon Musk",
          mode: "Referral",
          type: "TB",
          nature: "New Consultation",
          date: "January 7, 2022",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Elon Musk",
          mode: "Referral",
          type: "TB",
          nature: "New Consultation",
          date: "January 7, 2022",
        },
        {
          family_no: "SN-023845",
          name: "Elon Musk",
          mode: "Referral",
          type: "TB",
          nature: "New Consultation",
          date: "January 7, 2022",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "IMMUNIZATION",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "MATERNAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "MATERNAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "MATERNAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "DENTAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "MATERNAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Steve Jobs",
          mode: "Walk-in",
          type: "GENERAL",
          nature: "New Admission",
          date: "January 2, 2019",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "DENTAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "DENTAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        {
          family_no: "SN-023845",
          name: "Bill Gates",
          mode: "Visited",
          type: "DENTAL",
          nature: "Follow-up visit",
          date: "January 9, 2021",
        },
        
      ]
    }
  }

  renderIcon(type){
    switch(type){
      case "DENTAL":
        return window.location.origin +  "/assets/images/dental.png"
      case "MATERNAL":
          return window.location.origin +  "/assets/images/maternal.png"
      case "IMMUNIZATION":
          return window.location.origin +  "/assets/images/immu.png"
      case "TB":
          return window.location.origin +  "/assets/images/tb.png"
      case "GENERAL":
          return window.location.origin +  "/assets/images/general.png"
    }
  }

  renderData(){
    return this.props.data.map(item => {
      item.date = new Date(item.date).toDateString()
      return item
    }).map(item => {
      return (
        <tr>
        { 
          Object.values(item).map((col, index) => {
            if(index === 3){
              return (<td> <img src={this.renderIcon(col)} className="pageIcon" alt="bleeh"/> {col}</td>)
            }
            return (<td>{col}</td>)
          })
        }
        {/* <td>
          <ConfirmDialog message="Are you sure you want to delete this record?" title="Confirm"><span className="delete-icon"><FontAwesomeIcon icon={faTrash}/> </span></ConfirmDialog>
          <span className="edit-icon"  onClick={() => window.location.href = "/treatment/general/1"}><FontAwesomeIcon icon={faEdit}/> </span></td> */}
      </tr>
      )
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Family No.</th>
            <th>Patient Name</th>
            <th>Mode of Transaction</th>
            <th>Type of Consultation</th>
            <th>Nature of Visit</th>
            <th>Date created</th>
            {/* <th>Action</th>             */}
          </tr>
        </thead>
        <tbody> 
          {this.renderData()}
        </tbody>
      </table>
    )
  }
}
