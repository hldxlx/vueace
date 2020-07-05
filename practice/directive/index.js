import Vue from 'vue';

new Vue({
  el:'#root',
  template:`
    <div>
      <div v-once>{{text}}</div>
      <div v-cloak>{{text}}</div>
      <div v-pre>{{text}}</div>
      <div v-if="active" v-text="text"></div>
      <div v-else-if="text === 0">Else if content</div>
      <div v-else>else content</div>
      <p v-html="html"></p>
      <input type="text" v-model.number="text"/>
      <input type="text" v-model.trim="text"/>
      <input type="text" v-model.lazy="text"/>
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" :value="1" v-model="arr">  
        <input type="checkbox" :value="2" v-model="arr">  
        <input type="checkbox" :value="3" v-model="arr">  
      </div>
      <div>
        <input type="radio" value="one" v-model="picked"> 
        <input type="radio" value="two" v-model="picked"> 
      </div>  
      <ul>
        <li v-for="(item,index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val,key,index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  data:{
    arr:[2,3],
    obj:{
      a:'1',
      b:'2',
      c:'3'
    },
    picked:'',
    text:1,
    active:false,
    html:'<span>this is html</span>'
  }
})
//v-if  是直接把它remove掉       （增删）
//v-show 是加了 display:none   （显示 隐藏）

//v-for 不要用index作为key
//v-cloak webpack项目的一般用不到  用在jq项目引入vue去掉{{}}
