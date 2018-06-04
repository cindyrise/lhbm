import apiUrl from './url'
import http from '../utils/http'
export default {
  async getAd(param){
   let ret= await http.post(apiUrl.getAd, param);
   return ret;
  },
  async createAd(param){
    let ret= await http.postFile(apiUrl.createAd, param);
    return ret;
  },
  async getCurIp(){
    let ret= await http.get(apiUrl.getCurIp, {});
    return ret;
  },
  async getSite(param){
    let ret= await http.postFile(apiUrl.getSite, param);
    return ret;
  },
  async createSite(param){
    let ret= await http.postFile(apiUrl.createSite, param);
    return ret;
  },
  async getSiteOption(param){
    let ret= await http.post(apiUrl.getSiteOption, param);
    return ret;
  },
  async createIcon(param){
    let ret= await http.post(apiUrl.createIcon, param);
    return ret;
  },
  async getIconList(param){
    let ret= await http.post(apiUrl.getIconList, param);
    return ret;
  },
}
