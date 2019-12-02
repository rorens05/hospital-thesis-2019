import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUserInjured, faUsers, faDiagnoses, faStethoscope, faPastafarianism, faBug, faWindowRestore, faUserNurse, faInfo, faChartLine, faTeeth, faGrimace, faTooth } from '@fortawesome/free-solid-svg-icons'
import homeIcon from './../../../assets/96px/Home\ 96.png'
import patientIcon from './../../../assets/96px/Patient\ 96.png'
import familyIcon from './../../../assets/96px/Family\ 96.png'
import treatmentIcon from './../../../assets/96px/Treatment\ 96.png'
import diseaseIcon from './../../../assets/96px/General\ Checkup\ 96.png'
import maternalIcon from './../../../assets/96px/Maternal\ 96.png'
import tbIcon from './../../../assets/96px/TB\ Diagnostic\ 96.png'
import immuneIcon from './../../../assets/96px/Immunation\ 96.png'
import dentalIcon from './../../../assets/96px/Dental\ 96.png'

import statisticsIcon from './../../../assets/96px/Statistics\ 96.png'
import backupIcon from './../../../assets/96px/Backup&Restore\ 96.png'
import userIcon from './../../../assets/96px/User\ 96.png'
import aboutIcon from './../../../assets/96px/About\ 96.png'
import print from './../../../assets/96px/Documents\ 96.png'

export class Sidebar extends Component {

  constructor(props){
    super(props)
    this.state = {
      home: this.props.home ? "active" : "",
      patient: this.props.patient ? "active" : "",
      family: this.props.family ? "active" : "",
      treatment: this.props.treatment ? "active" : "",
      diseases: this.props.diseases ? "active" : "",
      maternal: this.props.maternal ? "active" : "",
      tb: this.props.tb ? "active" : "",
      immunation: this.props.immunation ? "active" : "",
      dental: this.props.dental ? "active" : "",
      statistics: this.props.statistics ? "active" : "",
      backup: this.props.backup ? "active" : "",
      print: this.props.print ? "active" : "",
      user: this.props.user ? "active" : "",
      about: this.props.about ? "active" : "",     
    }
  }

  render() {
    return (
      <div className="sidebar">
        <h3 className={this.state.home}><a  href="/"><img src={homeIcon} alt="home" className="sidebar-icon"/> Home</a></h3> <hr/>    
        <h3 className={this.state.family}><a href="/family"><img src={familyIcon} alt="home" className="sidebar-icon"/> Family Record</a></h3> <h3 className={this.state.patient}><a href="/patients"><img src={patientIcon} alt="home" className="sidebar-icon"/> Patient Record</a></h3> <hr/>   
        <h3 className={this.state.treatment}><a href="/treatment"><img src={treatmentIcon} alt="home" className="sidebar-icon"/> Treatments Record</a></h3>      
        <h3 className={this.state.diseases + " secondary"}><a href="/treatment/general"><img src={diseaseIcon} alt="home" className="sidebar-icon"/> General Record</a></h3>      
        <h3 className={this.state.maternal + " secondary"}><a href="/treatment/maternal"><img src={maternalIcon} alt="home" className="sidebar-icon"/> Maternal Record</a></h3>      
        <h3 className={this.state.tb + " secondary"}><a href="/treatment/tb"><img src={tbIcon} alt="home" className="sidebar-icon"/> TB diagnostic Record</a></h3>      
        <h3 className={this.state.immunation + " secondary"}><a href="/treatment/immunation"><img src={immuneIcon} alt="home" className="sidebar-icon"/> Immunization Record</a></h3>
        <h3 className={this.state.dental + " secondary"}><a href="/treatment/dental"><img src={dentalIcon} alt="home" className="sidebar-icon"/> Dental Record</a></h3><hr/> 
        <h3 className={this.state.statistics}><a href="/statistics"><img src={statisticsIcon} alt="home" className="sidebar-icon"/> Statistical Report</a></h3>  
        <h3 className={this.state.print}><a href="/documents"><img src={print} alt="home" className="sidebar-icon"/> Documents</a></h3>  
        <h3 className={this.state.backup}><a href="/backup_and_restore"><img src={backupIcon} alt="home" className="sidebar-icon"/> Backup & Restore</a></h3>       
        <h3 className={this.state.user}><a href="/users"><img src={userIcon} alt="home" className="sidebar-icon"/> Users</a></h3> <hr/>     
        <h3 className={this.state.about}><a href="/about"><img src={aboutIcon} alt="home" className="sidebar-icon"/> About</a></h3>   
      </div>
    )
  }
}

export default Sidebar
