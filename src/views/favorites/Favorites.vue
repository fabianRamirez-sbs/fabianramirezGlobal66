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
          <template v-for="pokemon in filteredList">
            <v-list-item :key="pokemon.name" class="mb-3">
              <template v-slot:default="{ active }">
                <v-list-item-content @click="dataItem(pokemon)">
                  <v-list-item-title v-text="pokemon.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action @click="dataItem(pokemon)">
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
    <v-dialog v-model="dialog" width="80vw">
      <v-card>
        <v-img
          height="300"
          :src="dialogData.background"
        >
         <v-img
            align="center"
            max-width="250"
            :src="dialogData.img"
            style="margin: 2.5em auto 0;"
          ></v-img>
        </v-img>

        <v-card-title>Name: {{dialogData.name}}</v-card-title>
        <input
            type="text"
            placeholder="Inserta tu URL de YouTube aquí ..."
            v-model="copyData"
        />
        <v-card-text>
          <div>
          <p>Weight: {{dialogData.weight}}</p>
          <p>Height: {{dialogData.height}}</p>
          <p>Types: <span v-for="item in dialogData.types" :key="item.slot"> {{item.type.name}}</span></p>
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn dark color="color3" elevation="2" rounded x-large
            v-clipboard:copy="copyData"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">
            Share to my friends
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <Footer />
    <Loading />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppBar from '@/components/globalComponents/AppBar'
import Footer from '@/components/globalComponents/Footer'
import Image from '@/assets/images/background.svg'
import Loading from '@/components/globalComponents/Loading'

export default {
  name: 'Home',

  data () {
    return {
      copyData: '',
      dialog: false,
      dialogData: {
        img: null,
        background: Image,
        name: '',
        weight: null,
        height: null,
        types: []
      },
      selected: [],
      search: ''
    }
  },

  computed: {
    ...mapState('PokeapiStore', ['favoritePokemons', 'pokemon']),
    filteredList () {
      return this.favoritePokemons.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: { AppBar, Footer, Loading },
  methods: {
    ...mapActions('PokeapiStore', ['GET_pokemon']),
    dataItem (item) {
      this.GET_pokemon(item).then(response => {
        this.dialog = true
        console.log(this.pokemon.data.forms[0].name)
        this.dialogData.img = this.pokemon.data.sprites.other.dream_world.front_default
        this.dialogData.name = this.pokemon.data.forms[0].name
        this.dialogData.weight = this.pokemon.data.weight
        this.dialogData.height = this.pokemon.data.height
        this.dialogData.types = this.pokemon.data.types
      })
    },
    onCopy: function (e) {
      alert('You just copied the following text to the clipboard: ' + e.text)
    },
    onError: function (e) {
      alert('Could not copy text to clipboard')
      console.log(e)
    }
  },
  watch: {},
  mounted () {},
  created () {}
}
</script>
<style scoped>
.v-card.v-sheet--outlined {
  border: none;
}
.v-list.v-sheet {
  background-color: #f5f5f5;
}
.v-list-item.v-list-item--link {
  background-color: white;
  border-radius: 4px;
}
.v-list-item.v-item--active.v-list-item--active {
  color: grey;
}
</style>
