import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class General extends Base{
  async fetchAll(){
    return this.sendRequest(constants.GENERAL,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.GENERAL}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.GENERAL ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.GENERAL}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.GENERAL}/${data.id}` ,RequestMethods.PATCH, data)
  }
}