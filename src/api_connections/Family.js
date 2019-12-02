import Base from "./Base";
import constants from "../constants/constants";
import RequestMethods from "../constants/RequestMethods";
import Patient from './Patient'

export default class Family extends Base{
  async fetchAll(){
    return this.sendRequest(constants.FAMILIES,RequestMethods.GET, {})
  }

  async fetch(id){
    return this.sendRequest(`${constants.FAMILIES}/${id}`,RequestMethods.GET, {})
  }

  async create(data){
    return this.sendRequest(constants.FAMILIES ,RequestMethods.POST, data)
  }

  async destroy(id){
    (await new Patient().fetchAll()).data.data.map(async(p) => {
      if(p.family_id == id){
        await new Patient().destroy(p.id)
      }
    })
    return this.sendRequest(`${constants.FAMILIES}/${id}` ,RequestMethods.DELETE)
  }
  async update(data){
    console.log(data, "this is data")
    return this.sendRequest(`${constants.FAMILIES}/${data.id}` ,RequestMethods.PATCH, data)
  }
}