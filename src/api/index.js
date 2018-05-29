import apiUrl from './url'
import http from '../utils/http'
export default {
  getAd(param,cb){
   http.post(apiUrl.getAd, param).then(ret=>{
      cb(ret);
    })
  }
}
