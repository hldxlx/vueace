import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)


const router = createRouter()
const store = createStore()

router.beforeEach((to,from,next)=>{
  console.log('beforeEach')
  next()
  // if(to.fullPath === '/app'){  //验证一些页面是需要用户登录才显示
  //   next({path:'/login'})
  // }else{
  //   next()
  // }

})

router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  next()
})

router.afterEach((to,from)=>{
  console.log('beforeResolve')
})


new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
