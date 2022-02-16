<template>
    <div id="loading" v-show="statusLoading">
      <v-container>
        <v-row align="center" class="fullHeight">
          <v-col class="text-center">
            <div class="d-flex justify-center">
              <v-img
                class="animate__animated animate__flip animate__infinite infinite animate__slow"
                align="center"
                lazy-src="informations.img"
                max-width="250"
                :src="img"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import Image from '@/assets/images/Loader.svg'

export default {
  name: 'Loading',

  components: { },

  data: () => ({
    img: Image,
    statusLoading: true
  }),
  methods: {
    delayLoading () {
      setTimeout(() => {
        this.statusLoading = false
      }, 2000)
    }
  },
  created () {},
  mounted () {
    this.delayLoading()
  }
}
</script>

<style scoped>
#loading{
  position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
      background-color: #F5F5F5;
}
.fullHeight {
  height: 100vh;
}
</style>
