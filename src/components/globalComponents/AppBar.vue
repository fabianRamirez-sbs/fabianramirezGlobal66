<template>
  <v-app-bar color="accent-4" class="mb-10">
    <v-toolbar-title>
      <input type="text" v-model="search" @change="handleClick" placeholder="Search title.."/>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'navBar',
  props: ['dataList'],

  data () {
    return {
      filter: {},
      search: ''
    }
  },

  computed: {},
  components: {},
  methods: {
    handleClick () {
      this.$emit('change', this.search)
    }
  },
  watch: {},
  mounted () { },
  created () {}
}
</script>
<style></style>
