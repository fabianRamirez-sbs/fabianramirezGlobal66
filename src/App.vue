<template>
  <v-app class="backgroundColor">
    <div >
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
  }),
  created () {},
  mounted () {}
}
</script>

<style src='animate.css/animate.min.css'></style>
<style>
body, .backgroundColor, .v-application--wrap {
  background-color: #F5F5F5;
}
</style>
