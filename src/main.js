import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import store from './store'
import { Lazyload } from 'vant';


Vue.use(Lazyload)
Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
