import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axios } from '@/assets/js/axios.js'
import '../mock/mock.js'
import {
  Toast,
  Button,
  Field,
  Tab,
  Tabs,
  NavBar,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Col,
  Row,
  List,
  Cell,
  CellGroup,
  PullRefresh,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from 'vant'
import '@/assets/styles/reset.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(NavBar)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Field)
  .use(Button)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(Col)
  .use(Row)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(PullRefresh)
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
