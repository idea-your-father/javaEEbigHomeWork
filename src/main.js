// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//需要再 main这里引入全局样式表 ，并且注册
import '@/assets/css/global.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册 element-ui, 也可以通过 import 局部注册
Vue.use(ElementUI);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
