import Vue from 'vue';


const component = {
  model:{
    prop:'value1',
    event:'change'
  },
  props:['value','value1'],
  template:`
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods:{
    handleInput(e){
      this.$emit('change',e.target.value);
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
  template:`
    <div>
      <comp-one :value="value" @input="value = arguments[0]"></comp-one>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})
