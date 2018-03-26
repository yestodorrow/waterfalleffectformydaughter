// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import http from 'axios'


import Vuex from 'vuex'
import 'normalize.css'
// 引入懒加载

import VueLazyload from 'vue-lazyload'


// 引入下拉加载
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);


Vue.use(Vuex)
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // require styles
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default global options } */)



Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.jpg',
  loading: 'static/loading.gif',
  attempt: 1
})
import VFlow from 'v-flow';
Vue.use(VFlow);





const store=new Vuex.Store({
  state:{
    pics:[]
  },
  getters:{},
  mutations:{
    GETPIC(state,data){
      console.log(data);
        state.pics=data
    },

  },
  actions:{
    getPic(context,type){
      http.get("./static/daughter.txt").then(response=>{
        console.log(1);
        context.commit("GETPIC",response.data);
      }).catch(err=>{
        console.log(err)
      })
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
