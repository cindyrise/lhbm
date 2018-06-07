import frontUrl from './frontUrl'
import http from '../utils/http'
export default {
  async getLocation(param){
    let ret= await http.post(frontUrl.getLocation, param);
    return ret;
  },
  async getAdList(param){
   let ret= await http.post(frontUrl.getAdList, param);
   return ret;
  },
  async getIconList(param){
    let ret= await http.post(frontUrl.getIconList, param);
    return ret;
  },
  async getDictByCode(param){
    let ret= await http.post(frontUrl.getDictByCode, param);
    return ret;
  }
}
