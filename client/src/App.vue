<template>
  <div id="app">
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" hide-overlay stateless>
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar router-link to="/">
                  <img height="20px" src="./assets/logo.png">
                </v-list-tile-avatar>
                <v-list-tile-content router-link to="/">
                  <v-list-tile-title>Quantum Assist</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon @click.stop="mini = !mini">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile v-for="item in navbar" :key="item.title" router-link :to="item.route">
              
                <v-list-tile-action>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{item.title}}</v-list-tile-title>
                </v-list-tile-content>
              
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </v-app>
    
    <router-view/>

    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Remain Quantum</strong>
        </v-card-title>
        <v-card-actions class="gray darken-3 justify-center">
          &copy;2019 <strong>Quantum Assist</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: true,
      navbar: [
        {title: 'Periodic Table', icon: 'home', route:'/'},
        {title: 'About', icon: 'info', route: '/about'},
        {title: 'Account', icon: 'account_circle', route: '/register'}
      ],
      right: null
    }
  }
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
}
</style>
