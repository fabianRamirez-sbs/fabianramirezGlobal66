<template>
  <v-footer outlined app color="color9">
     <v-row justify="center">
      <v-col class="text-center" cols="6" sm="2">
        <v-btn block dark color="color6" elevation="2" rounded x-large  router-link to="/">
          <v-icon left class="mr-3">
            fa-solid fa-list
          </v-icon>
          ALL
        </v-btn>
      </v-col>
      <v-col class="text-center" cols="6" sm="2">
        <v-btn block dark color="color6" elevation="2" rounded x-large router-link to="/favorites">
          <v-icon left class="mr-3">
            fa-solid fa-star
          </v-icon>
          Favorites
        </v-btn>
      </v-col>
     </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'footer',

  data () {
    return {}
  },

  computed: {},
  components: {},
  methods: {},
  watch: {},
  mounted () {},
  created () {}
}
</script>
<style>
footer {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
footer button.v-btn{
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
a.v-btn.v-btn--active {
  background-color: #F22539 !important;
}
</style>
