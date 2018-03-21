// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import http from 'axios'
import 'normalize.css'
// 引入懒加载

import VueLazyload from 'vue-lazyload'



 
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.jpg',
  loading: 'static/loading.gif',
  attempt: 1
})
import VFlow from 'v-flow';
Vue.use(VFlow);

Vue.prototype.$http=http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
