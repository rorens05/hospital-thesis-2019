import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class ConfirmDialog extends Component {

  state={
    modal2: false,
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <span>
      <span onClick={this.toggle(2)}>{this.props.children}</span>
      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)}>{this.props.title}</MDBModalHeader>
        <MDBModalBody>
          {this.props.message}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="success" onClick={this.toggle(2)}>No</MDBBtn>
          <MDBBtn color="danger" onClick={this.props.onClick}>Yes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </span>
    )
  }
}
