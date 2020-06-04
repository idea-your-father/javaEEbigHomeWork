import Vue from 'vue'
import Router from 'vue-router'

import LoginView from "@/views/login/LoginView";


import NavLeft from "@/views/tabbar/NavLeft";
import NavExample from "@/views/tabbar/NavExample";
import LoginPage from "@/views/login/LoginPage";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
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
