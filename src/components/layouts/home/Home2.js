import React, { Component } from 'react'
import { MDBBtn, MDBContainer, } from "mdbreact";
import {toast } from 'react-toastify'
export class Home extends Component {
  render() {
    return (
      <MDBContainer>
        <h1>Laurence Template</h1>
        <p>find me in src/components/layouts/home/home.js</p>
        <MDBBtn color="primary" onClick={() => toast.success("toast testing")}>Primary</MDBBtn>
      </MDBContainer>
    )
  }
}

export default Home
