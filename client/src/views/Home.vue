<template>
<v-container fluid>
      <v-layout column wrap justify-center>
        <div class="home">
          <img alt="Vue logo" src="../assets/logo.png">
          <HelloWorld msg="Welcome to Quantum Assist"/>
          <p>{{ mini }}</p>
        </div>
      </v-layout>
</v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState([
      'mini'
    ])
  },
  methods: mapMutations([
    'toggle'
  ])
}
</script>

<style scoped>
  .home img{
    max-width: 150px;
    width: 100%;
    margin: 20px auto;
  }
</style>
