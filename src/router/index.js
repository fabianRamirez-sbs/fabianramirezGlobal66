import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import Favorites from '@/views/favorites/Favorites'

Vue.use(Router)

let router = new Router({

  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }

  ]
})

export default router
