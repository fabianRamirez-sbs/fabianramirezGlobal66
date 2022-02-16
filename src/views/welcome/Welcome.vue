<template>
  <v-app>
    <div>
      <v-container>
        <v-row align="center" class="fullHeight">
          <v-col class="text-center">
            <div class="d-flex justify-center">
              <v-img
                align="center"
                lazy-src="informations.img"
                max-width="250"
                :src="informations.img"
              ></v-img>
            </div>
            <div class="header">
              <div class="header__title mt-2 mb-6">
                <h2>{{ informations.title }}</h2>
              </div>
              <div class="header__copy">
                <p>{{ informations.copy }}</p>
              </div>
              <div class="header__btn">
                  <v-btn dark color="color3" elevation="2" rounded x-large router-link to="/list">
                    Get started
                  </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Image from '@/assets/images/home/welcome.svg'

export default {
  name: 'App',

  components: { },

  data: () => ({
    informations: {
      title: 'Welcome to Pokédex',
      copy: 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.',
      img: Image
    }
  }),
  created () {},
  mounted () {}
}
</script>

<style scoped>
.fullHeight {
  height: 100vh;
}
.header__copy p{
  width: 100%;
  margin: 0 auto 1em;
}
@media (min-width: 600px) {
  .header__copy p{
    width: 50%;
  }
 }
</style>
