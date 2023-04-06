import Vue from 'vue'
import App from './App.vue'
//三级联动全局组件
//注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
//引入路由
import router from '@/router'

import store from '@/store'

// import { reqCatagoryList } from './api'
// reqCatagoryList();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由信息
  router,
  store,
}).$mount('#app')
