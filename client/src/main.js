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
    mini: true,
    count: 0
  },
  mutations: {
    toggle (state) {
      if (state.mini == true){
        return;
      }
      else{
        state.mini = !state.mini;
      }
    },
    increment (state){
      state.count++
    }
  }
});

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  computed: mapState({
    mini: state => state.mini
  }),
  methods: mapMutations([
    'toggle',
    'increment'
  ]),
  render: h => h(App)
}).$mount('#app')

store.commit('toggle');
console.log(store.state.mini);