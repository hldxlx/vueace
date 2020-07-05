import Vue from 'vue';


const component = {
  //props 是外部组件用来约束这个组件的展示行为
  props:{//用这种比较严谨
    active:{
      type:Boolean,
      // required:true,
      default(){
        return true
      } //default和required 不会同时出现
    },
    propOne:String
  },
  // props:['active','propOne'],
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
  }
}

//全局注册
//Vue.component('CompOne',component);

new Vue({
  components:{
    CompOne:component
  },
  data:{
    prop1:'text1'
  },
  methods:{
    handleChange(){
      this.prop1 += 1
    }
  },
  mounted(){
    console.log(this.$refs.comp1)
  },
  el:'#root',
  template:`
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" propOne="text2"></comp-one>
    </div>
  `
})
