import Vue from 'vue'
const app = new Vue({
  // el:'#root',
  // template:'<div>{{text}}</div>',
  data:{
    text:0
  },
  beforeCreate(){
    console.log(this.$el,'beforeCreate');
  },
  created(){
    console.log(this.$el,'created');
  },
  beforeMount(){
    console.log(this.$el,'beforeMount');
  },
  mounted(){
    console.log(this.$el,'mounted');
  },
  beforeUpdate(){
    console.log(this,'beforeUpdate');
  },
  update(){
    console.log(this,'update');
  },
  activated(){
    console.log(this,'activated');
  },
  deactivated(){
    console.log(this,'deactivated');
  },
  beforeDestroy(){
    console.log(this,'beforeDestroy');
  },
  destroyed(){
    console.log(this,'destroyed');
  },
  render(h){
    // throw new TypeError('render error')
    console.log('render function invoked');
    return h('div',{},this.text)
  },
  renderError(h,err){//本组件的render出错时才会被调用 用在开发环境
    return h('div',{},err.stack)
  },
  errorCaptured(){
    //会向上冒泡
    //可用正式开发环境，可收集线上的错误
  }

})
app.$mount('#root');
// setInterval(()=>{
//   app.text += 1
// },500)

setTimeout(()=>{
  //主动销毁 它会主动去销毁所有的事件监听及$watch
  app.$destroy();
},1000)


//服务端渲染不会触发beforeMount 和 mounted 因为服务端没dom环境
