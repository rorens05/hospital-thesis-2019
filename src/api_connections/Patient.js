import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class Family extends Base{
  async fetchAll(){
    return this.sendRequest(constants.PATIENTS,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.PATIENTS}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.PATIENTS ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.PATIENTS}/${id}` ,RequestMethods.DELETE)
  }
  
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.PATIENTS}/${data.id}` ,RequestMethods.PATCH, data)
  }
}