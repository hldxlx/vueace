import Vue from 'vue'

new Vue({
  el:'#root',
  // template:`
  //   <div :id="aaa" @click="handleClick">
  //     {{isActive ? 'active':'not active'}}
  //     {{Date.now()}}
  //     {{html}}
  //     <p v-html="html"></p>
  //   </div>
  //  `,
  template:`
    <div :class="{active:!isActive}">
      <p v-html="html" :style="styles"></p>
      <p :style="[styles,styles2]">{{getJoinArr(arr)}}  （一般不用这种，用computed做）</p>
      <span :class="[isActive ? 'active' : '']">class数组写法</span>
      <span :class="[{active:!isActive}]">class数组与对象写法的合并</span>
    </div>
   `,
  data:{
    isActive:false,
    html:'<span>123</span>',
    arr:[1,2,3,4],
    aaa:'main',
    styles:{
      color:'red',
      appearance:'none'//消除浏览器默认样式  vue会自动根据浏览器判断加上前缀
    },
    styles2:{
      color:'yellow'
    }
  },
  methods:{
    handleClick(){
      alert('handleClick')
    },
    getJoinArr(arr){
      return arr.join(' ')
    }
  }
})
