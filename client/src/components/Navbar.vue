<template>
    <div id="navbar">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" @click="toggleMini" :mini-variant.sync="$store.state.mini" hide-overlay dark>
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                        <router-link class="nav-link" to="/">
                            <v-list-tile avatar>
                                <v-list-tile-avatar >
                                    <img height="20px" src="../assets/logo.png">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>Quantum Assist</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </router-link>
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
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'navbar',
    methods: {
        ...mapMutations([
            'TOGGLE_MINI'
        ]),
        toggleMini: function(){
            this.TOGGLE_MINI()
        }
    },
    data() {
        return {
            drawer: 1,
            navbar: [
                {title: 'Periodic Table', icon: 'dashboard', route:'/pt'},
                {title: 'About', icon: 'info', route: '/about'},
                {title: 'Account', icon: 'account_circle', route: '/account'}
            ],
            right: null
        }
    }
}
</script>

<style scoped>
    
</style>
