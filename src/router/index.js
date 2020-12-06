import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/datamarket',
    children: [
      {
        path: '/datamarket',
        name: 'datamarket',
        component: () => import('@/views/datamarket/index.vue')
      },
      {
        path: '/dataproduct',
        name: 'dataproduct',
        component: () => import('@/views/datamarket/dataproduct.vue')
      },
      {
        path: '/abilitymarket',
        name: 'abilitymarket',
        component: () => import('@/views/abilitymarket/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
