import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Form from './Form'
import images from '../../../../constants/images'
import General from '../../../../api_connections/General'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: null
    }
  }

	componentDidMount = async () => {
    let response = await new General().fetch(this.props.match.params.id);
    console.log(response)
    this.setState({ data: response.data.data });
	};

  onSubmit = async (data) => {
    let response = await new General().update(data);
    console.log(response)
    window.location.replace(`/treatment/general/${this.props.match.params.id}`)
  }

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
                Edit General Checkup
              </span>
            </div>
            <Form submit={this.onSubmit} data={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}
