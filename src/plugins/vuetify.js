import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import '@/assets/styles/global.scss'

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

Vue.use(Vuetify)
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es' // set locale
})

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'es'
    }
  }
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        color1: '#ECA539',
        color2: '#C00E20',
        color3: '#F22539',
        color4: '#353535',
        color5: '#5E5E5E',
        color6: '#BFBFBF',
        color7: '#E8E8E8',
        color8: '#F5F5F5',
        color9: '#F9F9F9'
      }
    }
  },
  lang: {
    locales: {
      i18n
    }
  },
  icons: {
    iconfont: 'fa'
  }
})

// https://color.adobe.com/es/trends/Game-design
