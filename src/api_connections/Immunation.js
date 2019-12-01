import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class Immunation extends Base{
  async fetchAll(){
    return this.sendRequest(constants.IMMUNATION,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.IMMUNATION}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.IMMUNATION ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.IMMUNATION}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.IMMUNATION}/${data.id}` ,RequestMethods.PATCH, data)
  }
}