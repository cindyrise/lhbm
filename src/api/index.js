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
  }
}
