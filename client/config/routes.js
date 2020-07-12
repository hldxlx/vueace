import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path:'/',
    redirect:'/app'
  },
  {
    path:'/app/:id', // /app/xxx
    // props:true, props使组件跟路由解耦（使组件复用性变得更高），尽量别用$route那种
    // props:{
    //   id:'468'
    // },
    props:(route)=>({
      id:route.query.b
    }),
    component:Todo,
    name:'app',
    meta:{
      title:'this is app',
      description:'adad'
    },
    children:[
      {
        path:'test',
        component:Login
      }
    ]
  },
  {
    path:'/login',
    component:Login
  }
  // {
  //   path:'/login/exact',
  //   component:Login
  // }
]
