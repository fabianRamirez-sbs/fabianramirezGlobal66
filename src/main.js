import Vue from 'vue'
import store from '@/store'
import App from './App'
// import Vuex from 'vuex'
import router from './router'
import vuetify from '@/plugins/vuetify'
import 'es6-promise/auto'
import VueSweetalert2 from 'vue-sweetalert2'
import '@/assets/utils/filters'

import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  components: {
    App
  },
  template: '<App/>'
})
