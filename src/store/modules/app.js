import backUrl from '@/api/backUrl'
import http from '@/utils/http'


const app = {
  state: {
    zone:[],
    dict:[],
    dictType:[],
    cityInfo:{}
  },
  mutations: {
    GET_ZONE: (state, zone) => {
      state.zone = zone
    },
    GET_DICT: (state, dict) => {
      state.dict = dict
    },
    GET_DICT_TYPE:(state,dictType)=>{
      state.dictType = dictType
    },
    GET_CITY_INFO:(state,cityInfo)=>{
      state.cityInfo = cityInfo
    }
  },
  actions: {
    async getZone({ commit }, params) {
      let ret= await http.get(backUrl.getZone,params);
      commit('GET_ZONE', ret.data||[]);
      return ret;
     },
     async getDict({ commit }, params) {
      let ret= await http.get(backUrl.getDict,params);
      commit('GET_DICT', ret.data||[]);
      return ret;
     },
     async getDictType({ commit }, params) {
      let ret= await http.get(backUrl.getDictType,params);
      commit('GET_DICT_TYPE', ret.data||[]);
      return ret;
     },
      getCityInfo({ commit }, params) {
      commit('GET_CITY_INFO', params);
     }
  }
}

export default app
