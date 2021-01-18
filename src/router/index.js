import Vue from "vue"
import VueRouter from "vue-router"
const Home =() =>import('../views/Home')
const Cart =() =>import('../views/cart')
const Category =() =>import('../views/category')
const Profile =() =>import('../views/profile')
//1.安装插件
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)}//
//2.创建router
// const routes = [
//     //添加映射关系
//         {
//           path: '/home',
//           component:Home,
    
//         },
//         {
//           path: '/cate',
//           component:Category,
    
//         },
//         {
//           path: '/shop',
//           component:Cart,
    
//         },
//         {
//           path: '/profile',
//           component:Profile
    
//         }
      
// ]
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/home',
            component:Home,
      
          },
          {
            path: '/cate',
            component:Category,
      
          },
          {
            path: '/shop',
            component:Cart,
      
          },
          {
            path: '/profile',
            component:Profile
      
          }
    ]
})
export default router