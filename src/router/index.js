import Vue from 'vue'
import Router from 'vue-router'

import LoginView from "@/views/login/LoginView";


import NavLeft from "@/views/tabbar/NavLeft";
import NavExample from "@/views/tabbar/NavExample";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/nav',
      name: 'NavLeft',
      component: NavLeft
    },
    {
      path: '/nav2',
      name: 'NavExample',
      component: NavExample
    }



  ]
})
