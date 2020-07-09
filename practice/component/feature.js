import Vue from 'vue';

const ChildComponent = {
    template:'<div>child component{{data.value}}</div>',
    inject:['yeye','data'],
    mounted(){
      console.log(this.$parent.$options.name)
      console.log(this.yeye,this.value)
    }
}
const component = {
  name:'comp',
  components:{
    ChildComponent
  },
  template:`
    <div :style="style">
       <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot name="body"></slot>
        </div>
        <slot value="4545"></slot>
        
        <child-component></child-component>
    </div>
  `,
  data(){
    return {
      style:{
        width:'200px',
        height:'200px',
        border:'1px solid #aaa'
      }
    }
  }
}
new Vue({
  el:'#root',
  components:{
    CompOne:component
  },
  provide(){
    const data = {}
    Object.defineProperty(data,'value',{
      get:()=>this.value,
      enumerable:true
    })
    return{
      yeye:this,
      data
    }
  },
  data(){
    return {
      value:233
    }
  },
  template:`
    <div>
      <comp-one ref="comp">
        <span slot="header">555</span>
        <span slot="body">'bb'</span>
        <span slot-scope="props" ref="span">{{props.value}}</span>{{value}}
      </comp-one>
      <input type="text" v-model="value">
    </div>
  `
})
