import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Icon } from 'vant'

Vue.config.productionTip = false
Vue.use(NavBar).use(Icon)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
