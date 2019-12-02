import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import logo from './../../../assets/images/logo.png'
import Base from '../../../api_connections/Base';
export class Login extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  componentDidMount = async() => {
    if(localStorage.getItem("AUTH") != null){
      window.location.href = "/"
    }
  }

  onclick = async() =>{
    let res = await new Base().sendSecureRequest("login", "post", {
      "email": this.state.email,
      "password": this.state.password
      }
    ).catch(err => {
      return err
    })
    if(res.data.status === "error"){
      alert("Invalid username or password")
    }else{
      console.log(res.data)
      // if(this.state.email == "nurse@ruralHealth.com"){
      //   localStorage.setItem("ROLE", "NURSE")
      // }else{
      //   localStorage.setItem("ROLE", "ADMIN")
      // }
      localStorage.setItem("ROLE", res.data.message.role.toUpperCase())
      localStorage.setItem("AUTH", res.data.message.Authorization)
      window.location.replace("/")
    }
  }

  onChange = (event) => {
    event = event.target
    this.setState({
      [event.name]: event.value
    })
  }

  render() {
    return (
      <div className="login-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6"  className="offset-md-3 login-form">
              <form><img src={logo} alt="logo"/>
                <p className="h3 mb-4 login-hospital-name"> RURAL HEALTH UNIT I</p>
                <p className="h5 mb-4 login-label">Login</p> 
                <div className="grey-text">
                  <MDBInput
                    label="Type your username"
                    group
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.onChange}
                  />
                  <MDBInput
                    label="Type your password"
                    group
                    name="password"
                    type="password"
                    validate
                    onChange={this.onChange}

                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary" onClick={() => this.onclick()}>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Login
