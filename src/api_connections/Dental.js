import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class Dental extends Base{
  async fetchAll(){
    return this.sendRequest(constants.DENTAL,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.DENTAL}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.DENTAL ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.DENTAL}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.DENTAL}/${data.id}` ,RequestMethods.PATCH, data)
  }
}