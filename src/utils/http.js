import axios from 'axios'
import {
  Message
} from 'element-ui'

// create an axios instance
const instance = axios.create({
  // baseURL:'/api/v1', // api的base_url
  // timeout: 5000 // request timeout
})

// request interceptor
instance.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
instance.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response.data;

      return Promise.reject('error');
    } else if (response.status == 401) {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 5 * 1000
      });
      //401退出;
      ///window.location.href='/login';
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })


const http = {
  post(url, data) {
    return instance({
      url,
      data,
      method: 'post',
    })
  },
  get(url, params) {
    return instance({
      url,
      params,
      method: 'get',
    })
  },
  postFile(url,data){
    return instance({
      url,
      data,
      method: 'post'
    })
  }
}

export default http
