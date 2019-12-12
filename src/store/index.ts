import Vue from 'vue'
import Vuex from 'vuex'
import store from './musicModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mousicModule: store
  }
})
