<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="500"
    >

      <v-list two-line>
        <v-list-item-group
         v-model="selected"
          multiple
        >
          <template v-for="(pokemon, index) in pokemons">
            <v-list-item :key="pokemon.name">
              <template v-slot:default="{ active }">
                <v-list-item-content @click="setFavorites(pokemon , active)">
                  <v-list-item-title v-text="pokemon.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action @click="setFavorites(pokemon , active)">
                  <v-icon
                    v-if="!active"
                    color="grey lighten-1"
                  >
                   fa-solid fa-star
                  </v-icon>

                  <v-icon
                    v-else
                    color="yellow darken-3"
                  >
                     fa-solid fa-star
                  </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < pokemons.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

  data () {
    return {
      selected: []
    }
  },

  computed: {
    ...mapState('PokeapiStore', ['pokemons'])
  },
  components: {},
  methods: {
    ...mapActions('PokeapiStore', ['GET_pokemons', 'POST_ratings']),
    setFavorites (item, status) {
      let data = item
      data.status = status
      this.POST_ratings(item)
    }
  },
  watch: {

  },
  mounted () {
    this.GET_pokemons()
  },
  created () {}
}
</script>
<style scoped>
</style>
