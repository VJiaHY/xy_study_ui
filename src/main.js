import Vue from 'vue'
import Element from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式文件
import Cookies from 'js-cookie'
// import store from './store'


/*import VueRouter from 'vue-router'*/
// import router from './router/router'

Vue.config.productionTip = false
import BMap from 'vue-baidu-map'



Vue.use(BMap, {
  ak: "rQxHPQX1ua21rWnXzTbUh5KSSUbnefxR"
})



Vue.component('bml-marker-cluster', BMap)

//rQxHPQX1ua21rWnXzTbUh5KSSUbnefxR
//KdiAN0AQ0iGOHrgGaaFjMPd5qQh55vY1
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

/*const router = new VueRouter({
  mode: 'history',
  routes: routers
})*/

// 添加路由守卫拦截，判断用户登录状态以跳转到对应页面
// router.beforeEach((to, from, next) => {
//   store.commit('getToken')
//   let token = store.state.user.token
//   if (!token && to.name !== 'login') {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })


