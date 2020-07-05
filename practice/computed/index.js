import Vue from 'vue'

new Vue({
  el:'#root',
  template:`
    <div>
      <p>Name:{{firstName + '' + lastName }}</p>
      <p>{{name}}</p>
      <p>{{getName()}}</p>
      <p>Number:{{number}}</p>
      <p>fullName:{{fullName}}</p>
      <p><input type="text" v-model="number"/></p>
      <p>firstName<input type="text" v-model="firstName"/></p>
      <p>lastName<input type="text" v-model="lastName"/></p>
       <p>obj.a<input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data:{
    firstName:'Jokcy',
    lastName:'Lou',
    number:0,
    fullName:'',
    obj:{
      a:'123'
    }
  },
  // computed:{
  //   name(){
  //     console.log('new name');
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // },
  computed:{
    name:{
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(name){//一般不要用computed的set方法
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  // watch:{//watch最初绑定不会折行 要它折行也可以，如下
  //   firstName(newName,oldName){
  //     this.fullName = newName + ' '+this.lastName
  //   }
  // },
  // watch 可用在监听一个值的变化，然后给后台发请求；computed不能做到这点
  mounted(){
    this.obj = {
      a:'456'
    }
  },
  watch:{
    firstName:{
      handler(newName,oldName){
        this.fullName = newName + ' '+this.lastName
      },
      immediate:true
    },
    // obj:{ //方式一
    //   handler(){
    //     console.log('obj.a changed')
    //   },
    //   immediate:true,
    //   deep:true
    // }
    'obj.a':{//方式二
      handler(){
        console.log('obj.a changed')
      },
      immediate:true
    }
  },
  methods:{
    getName(){
      console.log('getname');
      return `${this.firstName} ${this.lastName}`
    }
  }
})
//不要在watch 和 computed里面去修改你依赖的那个值；如果改了可能会导致无限循环
//他们是监听 然后处理一个新的值；而不是改原来的值
