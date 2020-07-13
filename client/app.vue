<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <p>{{textA}}----{{textPlus}}</p>
    <p>{{textC}}</p>
    <router-link :to="{name:'app'}">app</router-link>

    <router-link to="/login">login</router-link>
    <!--<router-link to="/login/exact">login exact</router-link>-->
     <transition name="fade">
       <router-view/>
     </transition>
    <Footer></Footer>
    <router-view name="a"/>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
//import Todo from './views/todo/todo.vue'

console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
//    Todo
  },
  mounted(){
//    console.log(this.$route)
    console.log(this.$store)
    let i = 1;
//    setInterval(()=>{
//      this.$store.commit('updateCount',{
//        num:i++,
//        num2:18
//      })
//    },1000)

//    this.$store.dispatch('updateCountAsync',{
//      num:5,
//      time:2000
//    })
    this.updateCount({
        num:i++,
        num2:18
      })
    this.updateCountAsync({
      num:5,
      time:2000
    })

    this['a/updateText']('anaa')
    this['a/add']()
  },
  methods:{
    ...mapActions(['updateCountAsync','a/add']),
    ...mapMutations(['updateCount','a/updateText'])
  },
  computed:{
//    ...mapState(['count']),
//    ...mapState({
//      counter:'count'
//    }),
    textA(){
      return this.$store.state.a.text
    },
    ...mapState({
      counter:(state) => state.count,
      textC: state => state.c.text
    }),
//    count(){
//      return this.$store.state.count
//    },
    ...mapGetters({
      'fullName':'fullName',
      textPlus:'a/textPlus'
    })
//    fullName(){
//      return this.$store.getters.fullName
//    }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


