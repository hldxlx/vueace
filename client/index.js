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

store.registerModule('c',{
  state:{
    text:3
  }
})

// store.watch((state) => state.count + 1,(newCount)=>{
//   console.log('new count',newCount)
// })
// store.subscribe((mutation,state)=>{
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action,state)=>{
  console.log(action.type)
  console.log(action.payload)
})


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
