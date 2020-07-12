// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path:'/',
    redirect:'/app'
  },
  {
    // path:'/app/:id', // /app/xxx
    // props:true, //props使组件跟路由解耦（使组件复用性变得更高），尽量别用$route那种
    // props:{
    //   id:'468'
    // },
    path:'/app',
    props:(route)=>({
      id:route.query.b
    }),
    components:{
      default:()=>import('../views/todo/todo.vue'),
      // a:Login
    },
    name:'app',
    meta:{
      title:'this is app',
      description:'adad'
    },
    beforeEnter(to,from,next){
      console.log('app route before enter')
      next();
    },
    // children:[
    //   {
    //     path:'test',
    //     component:Login
    //   }
    // ]
  },
  {
    path:'/login',
    components:{
      default:() => import('../views/login/login.vue'),
      // a:Todo
    }
  }
  // {
  //   path:'/login/exact',
  //   component:Login
  // }
]
