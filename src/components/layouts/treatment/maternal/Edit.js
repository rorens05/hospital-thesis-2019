import React, { Component } from 'react'
import Navbar from './../../dashboard/Navbar'
import Sidebar from './../../dashboard/Sidebar'
import Form from './Form'
import General from '../../../../api_connections/maternal'

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
    window.location.replace(`/treatment/maternal/${this.props.match.params.id}`)
  }

  render() {
    return (
      <div className="main-body">
        <Navbar/>
        <div className="flex-container">
          <Sidebar maternal/>
          <div className="content">
            <div className="header">
              <span>
                <img src={window.location.origin +  "/assets/images/maternal.png"} alt="general" className="pageIcon"/>
                Edit Maternal Checkup
              </span>
            </div>
            <Form submit={this.onSubmit} data={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}
