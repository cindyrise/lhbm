import apiUrl from '@/api/url'
import http from '@/utils/http'


const app = {
  state: {
    zone:[],
    dict:[]
  },
  mutations: {
    GET_ZONE: (state, zone) => {
      state.zone = zone
    },
    GET_DICT: (state, dict) => {
      state.dict = dict
    }
  },
  actions: {
    async getZone({ commit }, params) {
      let ret= await http.get(apiUrl.getZone,params);
      commit('GET_ZONE', ret.data||[]);
      return ret;
     },
     async getDict({ commit }, params) {
      let ret= await http.get(apiUrl.getDict,params);
      commit('GET_DICT', ret.data||[]);
      return ret;
     }
  }
}

export default app
