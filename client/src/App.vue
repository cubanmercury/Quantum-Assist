<template>
  <div id="app">
    <Navbar/>
    <div class="app-inner" @click="toggleMini">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import {mapState, mapMutations} from 'vuex';

export default {
  components:{
    Navbar
  },
  computed: {
    ...mapState([
      'mini'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGGLE_MINI'
    ]),
    toggleMini: function(){
      if(this.mini == false){
        this.TOGGLE_MINI()
      }
    }
  }
}
</script>


<style>
#app {
  font-family: 'Bai Jamjuree', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
}
.app-inner{
  width: 100%;
}
.container{
  padding: 0 !important;
  margin: 0 !important;
}
</style>
