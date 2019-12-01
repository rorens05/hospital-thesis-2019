import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";

export default class General extends Base{
  async fetchAll(){
    return this.sendRequest(constants.maternal,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.maternal}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.maternal ,RequestMethods.POST, data)
  }

  async destroy(id){
    return this.sendRequest(`${constants.maternal}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.maternal}/${data.id}` ,RequestMethods.PATCH, data)
  }
}