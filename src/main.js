// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import lodash from 'lodash'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
// export const HTTP = Vue.prototype.$http = axios
export const HTTP = axios.create({
  baseURL: 'http://demo.sibers.com/'
})
Vue.prototype.$lodash = lodash
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
