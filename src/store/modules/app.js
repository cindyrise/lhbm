import api from '@/api/index'


const user = {
  state: {
    zone:[]
  },
  mutations: {
    GET_ZONE: (state, zone) => {
      state.zone = zone
    }
  },
  actions: {
    getAd({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getAd(params).then(response => {
          const data = response.data
          commit('GET_ZONE', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app
