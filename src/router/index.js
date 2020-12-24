import Vue from 'vue'
import VueRouter from 'vue-router'
import Userlogin from '../views/Userlogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Userlogin',
    component: Userlogin,
  },
]

const router = new VueRouter({
  routes,
})

export default router
