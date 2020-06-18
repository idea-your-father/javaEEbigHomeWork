import Vue from 'vue'
import Router from 'vue-router'

import LoginView from "@/views/login/LoginView";


import NavLeft from "@/views/tabbar/NavLeft";
// import NavExample from "@/views/tabbar/NavExample";
import LoginPage from "@/views/login/LoginPage";
import Home from "../views/home/Home";
import NavExample from "../views/tabbar/NavExample";
import ShopInfo from "../views/info/ShopInfo/ShopInfo";
import BrandInfo from "../views/info/BrandInfo/BrandInfo";
import Category from "../views/info/Category/Category";
import SkuForm from "../views/info/SkuInfoAdd/SkuForm";
// Router.prototype.push = function push(location) {
//   return Router.call(this, location).catch(err => err)
// }
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    // {
    //   path:'/home',
    //   component: Home
    // },
    {
      path: '/nav',
      name: 'NavLeft',
      component: NavLeft
    },
    {
      path: '/nav2',
      name: 'NavExample',
      component: NavExample,
      redirect:'/shop',

      children:[{
        path: '/shop',
        component: ShopInfo
      },{
        path: '/category',
        component: Category
      },{
        path: '/brand',
        component: BrandInfo
      },{
        path:'/sku',
        component: SkuForm
      }


      ]
    }



  ]
})

router.beforeEach((to,from,next) => {
  //to: 将要访问的路径
  //next 放行函数，强制跳转路径 next(url)
  if(to.path=='/login') return next()

  let token = window.sessionStorage.getItem('token')
  if(!token) {
    return next('/login')
  }
  next()


})

export default router
