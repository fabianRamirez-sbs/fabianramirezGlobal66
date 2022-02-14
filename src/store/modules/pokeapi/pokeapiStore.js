import restApi from '@/store/utils/restApi.js'

const getters = {}
const actions = {
  GET_pokemons ({ commit }) {
    let url = `${process.env.ENDPOINT}pokemon/`
    return new Promise((resolve, reject) => {
      restApi
        .get(url)
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            commit({
              type: 'SET_pokemons',
              data: response.data.results
            })
            resolve()
          } else {
            reject(response.status)
          }
        })
        .catch(e => {
          reject(e)
        })
    })
  },

  GET_pokemon ({ commit }, pokemonId) {
    let url = `${process.env.ENDPOINT}/pokemon/${pokemonId}`
    return new Promise((resolve, reject) => {
      restApi
        .get(url)
        .then(response => {
          commit({
            type: 'SET_pokemon',
            data: response
          })
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  },

  POST_ratings ({ commit }, data) {
    commit({
      type: 'SET_favoritePokemons',
      data: data
    })
  }
}
const mutations = {
  SET_pokemons (state, data) {
    state.pokemons = data.data
  },
  SET_pokemon (state, data) {
    state.pokemon = data
  },
  SET_favoritePokemons (state, data) {
    state.favoritePokemons.push(data)
  }
}
export default {
  namespaced: true,
  dynamic: true,
  state () {
    return {
      pokemon: {},
      pokemons: [],
      favoritePokemons: []
    }
  },
  getters,
  actions,
  mutations
}
