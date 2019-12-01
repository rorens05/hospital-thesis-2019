import React, { Component } from 'react'
import Sidebar from './../dashboard/Sidebar'
import Navbar from './../dashboard/Navbar'
import user from './../../../assets/96px/Admin\ 96.png'
import nurse from './../../../assets/96px/User\ 96.png'
import { MDBRow, MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount(){
    setInterval(this.setTime, 1000)
  }

  setTime = () => {
    this.setState({time: new Date()})
  }

  render() {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar home/>
          <div className="content">
            <div className="home-container">
              <div class="image-container"><img src={window.localStorage.getItem("ROLE") == "NURSE" ? nurse: user} alt=""/></div>
              <h3>{window.localStorage.getItem("ROLE")}</h3>
              
              <MDBRow className="time-container">
                <MDBCol size="6">
                  <span><FontAwesomeIcon icon={faClock}/></span>
                  <h6>Time</h6>
                  <h5>{this.state.time.getHours() + ":" + this.state.time.getMinutes() + ":" + this.state.time.getSeconds()}</h5>
                </MDBCol>
                <MDBCol size="6">
                  <span><FontAwesomeIcon icon={faCalendarAlt}/></span>
                  <h6>Date</h6>
                  <h5>{days[this.state.time.getDay()] + " " + months[this.state.time.getMonth()] + " " + this.state.time.getDate() + ", " + this.state.time.getFullYear()}</h5>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
