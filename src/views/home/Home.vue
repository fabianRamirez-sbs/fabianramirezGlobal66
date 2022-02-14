<template>
  <div>
    Hola mundo
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

  data () {
    return {
    }
  },

  computed: {
    ...mapState('PokeapiStore', ['pokemons'])
  },
  components: {},
  methods: {
    ...mapActions('PokeapiStore', ['GET_pokemons'])
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
