// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuetify from 'vuetify'
import axios from 'axios'
import jsonp from 'jsonp'
Vue.prototype.axios = window.axios = axios
Vue.prototype.jsonp = window.jsonp = jsonp
axios.defaults.baseURL = "https://gitee.com/heiliuer/wxapp-meatball-backend/raw/master/"
axios.defaults.withCredentials = true

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
