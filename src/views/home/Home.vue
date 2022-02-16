<template>
  <div class="backgroundColor">

    <v-card class="mx-auto" :outlined="true" max-width="500" color="color8">
      <v-text-field
        class="pt-3 mb-1"
        solo
        v-model="search"
        label="Search"
        prepend-inner-icon="fa-magnifying-glass"
      ></v-text-field>
      <v-list>
        <v-list-item-group v-model="selected" multiple color="color8">
          <template v-for="(pokemon) in filteredList" >
            <v-list-item :key="pokemon.name" class="mb-3">
              <template v-slot:default="{ active }">
                <v-list-item-content @click="setFavorites(pokemon, active)">
                  <v-list-item-title v-text="pokemon.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action @click="setFavorites(pokemon, active)">
                  <v-icon v-if="!active" color="grey lighten-1">
                    fa-solid fa-star
                  </v-icon>

                  <v-icon v-else color="yellow darken-3">
                    fa-solid fa-star
                  </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <Footer />
    <Loading />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppBar from '@/components/globalComponents/AppBar'
import Footer from '@/components/globalComponents/Footer'
import Loading from '@/components/globalComponents/Loading'

export default {
  name: 'Home',

  data () {
    return {
      selected: [],
      search: ''
    }
  },

  computed: {
    ...mapState('PokeapiStore', ['pokemons']),
    filteredList () {
      return this.pokemons.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: { AppBar, Footer, Loading },
  methods: {
    ...mapActions('PokeapiStore', ['GET_pokemons', 'POST_ratings']),
    setFavorites (item, status) {
      let data = item
      data.status = status
      this.POST_ratings(item)
    }
  },
  watch: {},
  mounted () {
    this.GET_pokemons()
  },
  created () {}
}
</script>
<style scoped>
.v-card.v-sheet--outlined {
  border: none;
}
.v-list.v-sheet{
  background-color: #F5F5F5;

}
.v-list-item.v-list-item--link{
  background-color: white;
  border-radius: 4px;
}
.v-list-item.v-item--active.v-list-item--active{
  color: grey;
}
</style>
