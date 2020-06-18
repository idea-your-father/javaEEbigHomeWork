// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//需要再 main这里引入全局样式表 ，并且注册
import '@/assets/css/global.css'
import {logger} from '@/common/utils/PrintUtil.js'

import 'element-ui/lib/theme-chalk/index.css';

import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Footer, Main,
  Menu, MenuItem, MenuItemGroup, Submenu,
  Table, TableColumn,
  Switch,
  Tooltip, Pagination, Card, Breadcrumb, BreadcrumbItem, Row, Col,
  Dialog,Select,Option,
  Steps,Step,
  Tabs,TabPane,
  Tree

} from "element-ui";

// import TreeTable

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tree)

Vue.prototype.$message = Message


import axios from 'axios'
import el from "element-ui/src/locale/lang/el";
axios.defaults.baseURL = '/'

axios.interceptors.request.use(config=>{
  //请求头的token 从本地缓存中获取

  const token = window.sessionStorage.getItem('token')
  // console.log("token: ${token}"+token)
  // config.headers.token = token

  config.headers={
    'token':token,

    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
    "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
  }
  console.log("request -->"+JSON.stringify(config))
  return config
})

axios.interceptors.response.use(response => {
    //拦截响应，做统一处理
    console.log("resp -->"+JSON.stringify(response.data))
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  }
)


Vue.prototype.$http = axios;
Vue.prototype.$log = logger
// Vue.prototype.$log.print = print;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
