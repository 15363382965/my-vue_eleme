import Vue from 'vue'
import App from './App.vue'


//导入所要设置的路由还有要引用自己所设置的线路（router.js）
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
import jq from './assets/js/jquery-1.11.1.min.js'



import '../node_modules/mint-ui/lib/style.css'

import Mint from 'mint-ui';
Vue.use(Mint);


import '../node_modules/element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui';

Vue.use(ElementUI);

//导入样式表
import './assets/css/comment.css'
import './assets/css/animate.css'
//把路由挂载到实例化花对象中
Vue.use(vueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
