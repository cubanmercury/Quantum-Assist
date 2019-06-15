<template>
<v-container fluid>
      <v-layout column wrap justify-center>
        <div class="home">
          <div class="home_card">
            <img alt="Vue logo" src="../assets/logo.png">
            <HelloWorld msg="Welcome to Quantum Assist"/>
          </div>
          
        </div>
      </v-layout>
</v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home img{
    max-width: 200px;
    width: 100%;
    margin: 20px auto;
  }
  .home{
    height: 100vh;
    background-image: url("https://www.mediafire.com/convkey/8db6/5n6nlp90ze8xs0q6g.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  .home_card{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    width: 55%;
    height: 50vh;
    margin-left: auto;
    margin-right: auto;
    background: rgba(66, 66, 66, 0.7);
    border-radius: 35px;
  }
</style>

