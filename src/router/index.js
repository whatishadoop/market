import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/opensrcinfo',
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
        component: () => import('@/views/abilitymarket/index.vue'),
        meta: { id: '2' }
      },
      {
        path: '/opensrcinfo',
        name: 'opensrcinfo',
        component: () => import('@/views/opensrcinfo/index.vue')
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
