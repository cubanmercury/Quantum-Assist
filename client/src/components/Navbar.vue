<template>
    <div id="navbar">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" hide-overlay stateless>
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar router-link to="/">
                            <img height="20px" src="../assets/logo.png">
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
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            drawer: 1,
            mini: this.$store.state.mini,
            navbar: [
                {title: 'Periodic Table', icon: 'dashboard', route:'/'},
                {title: 'About', icon: 'info', route: '/about'},
                {title: 'Account', icon: 'account_circle', route: '/register'}
            ],
            right: null
        }
    },
    methods: mapMutations([
    'openMini',
    'closeMini'
  ])
}
</script>

<style scoped>

</style>
