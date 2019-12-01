import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class Tb extends Base{
  async fetchAll(){
    return this.sendRequest(constants.TB,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.TB}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.TB ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.TB}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.TB}/${data.id}` ,RequestMethods.PATCH, data)
  }
}