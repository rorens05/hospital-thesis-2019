import React, { Component } from 'react';
import Routes from './components/Routes';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {

  componentDidMount = () => {
    if(window.location.pathname != "/login"){
      if(localStorage.getItem("AUTH") == null){
        window.location.href = "/login"
      }
    }
  }

	render() {
		return (
			<div>
				<Routes />
				<ToastContainer hideProgressBar={true} newestOnTop={true} autoClose={5000} />
			</div>
		);
	}
}
