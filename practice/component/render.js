import Vue from 'vue';

const ChildComponent = {
  template:'<div>child component{{data.value}}</div>',
  mounted(){
    console.log(this.$parent.$options.name)
  }
}
const component = {
  props:["props1"],
  name:'comp',
  components:{
    ChildComponent
  },
  template:`
    <div :style="style">
       <slot></slot>
    </div>
  `,
  render(createElement){
    return createElement('div',{
      style:this.style,
      on:{
        click:()=>{this.$emit('click')}
      }
    },[
      this.$slots.header,
      this.props1
    ])
  },
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
  data(){
    return {
      value:233
    }
  },
  methods:{
    handleClick(){
      console.log('clicked')
    }
  },
  // template:`
  //   <div>
  //     <comp-one ref="comp">
  //       <span ref="span">555</span>
  //     </comp-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref:'comp',
        props:{
          props1:this.value
        },
        // on:{
        //   click:this.handleClick
        // },
        nativeOn:{
          click:this.handleClick
        }
      }
      ,
      [
        createElement('span', {
        ref:'span',
          slot:'header',
          attrs:{
            id:'test-id'
          },
          domProps:{
            innerHTML:"<span>666</span>"
          }
        },this.value)
      ]
    )
  }
})
