import Vue from 'vue'
import Vuex from 'vuex'

/* globalModules */
import PokeapiStore from './modules/pokeapi/pokeapiStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PokeapiStore
  }
})
