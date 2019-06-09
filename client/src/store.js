import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mini: true
    },
    getters: {

    },
    mutations: {
        TOGGLE_MINI: (state) => {
            state.mini = !state.mini
        }
    },
    actions: {

    }
});





// const store = new Vuex.Store({
//     state: {
//       mini: true
//     },
//     mutations: {
//       closeMini (state) {
//         if (state.mini == true){
//           return;
//         }else{
//           state.mini = !state.mini;
//         }
//       },
//       openMini(state){
//         if(state.mini == true){
//           state.mini = !state.mini;
//         }else{
//           return;
//         }
//       }
//     },
//     actions: {
//       openMini (context){
//         context.commit('openMini')
//       }
//     }
//   });