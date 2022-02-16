import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import Welcome from '@/views/welcome/Welcome'
import Favorites from '@/views/favorites/Favorites'

Vue.use(Router)

let router = new Router({

  routes: [

    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/list',
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
