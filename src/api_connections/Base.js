import axios from "axios"
import constants from "../constants/constants"

export default class Base {
  constructor(){
    console.log("New connection has been initialized")
  }

  async sendSecureRequest(url, method, data){
    let response = await axios({
      method: method,
      url: `${constants.BASE_URL}${url}`,
      data
    }).catch(err => {
      return {status: 'error', message: err}
    })
    return response
  }

  async sendRequest(url, method, data){
    let config = {
      method: method,
      url: `${constants.BASE_URL}${url}`,
      data
    }
    console.log(config, "this is config")
    let response = await axios(config).catch(err => {
      return {
        status: "error", 
        message: "Network error"
      }
    })
    return response
  }


}