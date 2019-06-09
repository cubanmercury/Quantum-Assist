import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  // computed: mapState([
  //   'mini'
  // ]),
  // methods: mapMutations([
  //   'openMini',
  //   'closeMini'
  // ]),
  render: h => h(App)
}).$mount('#app')
