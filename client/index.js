import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

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
  router,
  render: (h) => h(App)
}).$mount('#root')
