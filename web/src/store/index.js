import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: true
  },
  mutations: {
    updateToken(state) {
      state.token = !state.token
    },
  },
  actions: {
  },
  modules: {
  }
})


export default store