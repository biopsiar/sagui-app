import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/settings',
      name: 'settings',
      meta: { order: 0 },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: { order: 1 },
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { order: 2 },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: '/',
      name: 'login',
      meta: { order: -1 },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    }
  ]
})
