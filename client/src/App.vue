<template>
  <div id="app">
    <Navbar/>
    <div class="app-inner" @click="closeMini">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { mapMutations, mapState} from 'vuex';
export default {
  components:{
    Navbar
  },
  computed: {
    ...mapState([
      'mini'
    ])
  },
  methods: mapMutations([
    'openMini',
    'closeMini'
  ])
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
