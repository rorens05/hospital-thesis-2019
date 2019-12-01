import React, { Component } from 'react'
import Navbar from './../dashboard/Navbar'
import Sidebar from './../dashboard/Sidebar'
import {Header} from './components/Header'
import Selection from './components/Selections'
import Treatment from './treatments/Index'
import {MDBContainer} from 'mdbreact'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: "TREATMENT"
    }
  }

  getActive = (type) => {
    return this.state.selected === type ? "statistic-active" : ""
  }

  updateSelected = (type) => {
    this.setState({selected: type})
  }

  displayContainers = () => {
    switch(this.state.selected){
      case "TREATMENT":
        return <Treatment /> 
      case "PATIENT":
        return <Treatment /> 
      case "AGE":
        return <Treatment /> 
      case "GENERAL":
        return <Treatment /> 
    }
  }

  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar statistics/>
          <div className="content">
            <Header/>
            <div  className="statistics-type-container border">
              <Selection
                updateSelected={this.updateSelected}
                getActive={this.getActive}
              />
            {this.displayContainers()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
