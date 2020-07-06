import Vue from 'vue';


const component = {
  props:{
    active:Boolean,
    propOne:String
  },
  template:`
    <div>
      <input type="text" v-model="propOne">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  methods:{
    handleChange(){
      this.$emit('change')
    }
  },
  data(){
    return {
      text:0
    }
  },
  mounted(){
    console.log('comp mounted');
  }
}
const parent = new Vue({
  name:'parent'
})
const component2 = {
  extends:component,
  data(){
    return{
      text:1
    }
  },
  mounted(){
    console.log(this.$parent.$options.name);
    this.$parent.text = 666;
  }
}
//全局注册
Vue.component('CompOne',component);

const CompVue = Vue.extend(component);
// new CompVue({
//   el:'#root',
//   propsData:{
//     propOne:'xxx'
//   },
//   data:{
//     text:'123'
//   },
//   mounted(){
//     console.log('instance mounted');
//   }
// })
new Vue({
  parent:parent,
  name:'Root',
  el:'#root',
  mounted(){
    console.log(this.$parent.$options.name);//this.$parent的东西不要随意修改
  },
  components:{
    Comp:component2
  },
  data(){
    return {
      text:233
    }
  },
  template:`
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})
