import Vue from 'vue'

const app = new Vue({
  // el:'#root',
  template:'<div>{{text}}{{obj.a}}</div>',
  data:{
    text:'myte',
    obj:{}
  }
  // ,
  // watch:{
  //   text(newText,oldText){
  //     console.log(`${newText}::${oldText}`)
  //   }
  // }
})
app.$mount("#root");
app.text = 0;
// let i = 0;
setInterval(()=>{
  // i++;
  app.text += 1;
  app.text += 1;
  app.text += 1;
  app.text += 1;
  app.text += 1;
  // app.obj.a = i;
  //除非万不得已才用$forceUpdate 因为它会强迫组件渲染,可能会导致性能低
  // app.$forceUpdate();

  // app.$set(app.obj,'a',i);
},1000)

//app.$options.render 下一次的值变化时触发
// app.$options.render =(h)=>{
//   return h('div',{},'new render function')
// }
// console.log(app.$root == app);
// console.log(app.$isServer);//判断服务端渲染

//从一个页面跳到一个新页面时，watch的东西要注销，否则会造成内存溢出
// const unWatch = app.$watch('text',(newText,oldText)=>{
//   console.log(`${newText}:${oldText}`)
// })
// setTimeout(()=>{
//   unWatch()
// },2000)
//
// app.$on('test',(a,b)=>{
//   console.log(`test 被触发${a}--${b}`)
// })
// app.$once('test',(a,b)=>{
//   console.log(`test 只触发一次${a}--${b}`)
// })

// setInterval(()=>{
//   app.$emit('test',1,2);
// },1000)


