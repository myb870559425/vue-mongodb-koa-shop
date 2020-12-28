import Vue from 'vue'
import VueRouter from 'vue-router'
import Userlogin from '@/views/Userlogin.vue'
import Allproduct from '@/views/Allproduct.vue'
import Fountproduct from '@/views/Fountproduct.vue'
import Shopingcar from '@/views/Shopingcar.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Userlogin',
    components: {
      default: Userlogin,
      'footer-bar': Footer,
      'header-bar': Header,
    },
    meta: {
      title: '登录',
    },
  },
  {
    path: '/Allproduct',
    name: 'Allproduct',
    components: {
      default: Allproduct,
      'footer-bar': Footer,
      'header-bar': Header,
    },
    meta: {
      title: '商品分类',
    },
  },
  {
    path: '/Fountproduct',
    name: 'Fountproduct',
    components: {
      default: Fountproduct,
      'footer-bar': Footer,
      'header-bar': Header,
    },
    meta: {
      title: '发现',
    },
  },
  {
    path: '/Shopingcar',
    name: 'Shopingcar',
    components: {
      default: Shopingcar,
      // 'footer-bar': Footer,
      'header-bar': Header,
    },
    meta: {
      title: '购物车',
    },
  },
]

const router = new VueRouter({
  routes,
})

export default router
