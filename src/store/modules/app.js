import apiUrl from '@/api/url'
import http from '@/utils/http'


const app = {
  state: {
    zone:[]
  },
  mutations: {
    GET_ZONE: (state, zone) => {
      state.zone = zone
    }
  },
  actions: {
    async getZone({ commit }, params) {
      let ret= await http.get(apiUrl.getZone,params);
      commit('GET_ZONE', ret.data||[]);
      return ret;
     }
  }
}

export default app
