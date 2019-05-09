import Vue from 'vue';
import Vuex from 'vuex';
import { mapState, mapMutations } from 'vuex';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mini: true
  },
  mutations: {
    closeMini (state) {
      if (state.mini == true){
        return;
      }else{
        state.mini = !state.mini;
      }
    },
    openMini(state){
      if(state.mini == true){
        state.mini = !state.mini;
      }else{
        return;
      }
    }
  }
});

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  computed: mapState([
    'mini'
  ]),
  methods: mapMutations([
    'openMini',
    'closeMini'
  ]),
  render: h => h(App)
}).$mount('#app')
