import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    dogs: [],
    cats: []
  },
  actions: {
    getDogs(context) {
      const api = 'http://localhost:3000/dogs';
      axios.get(api).then((response) => {
        context.commit('DOGS', response.data)
        console.log(response.data); 
      }); 
    }, 
    getCats(context) {
      const api = 'http://localhost:3000/cats';
      const vm = this;
      axios.get(api).then((response) => {
        context.commit('CATS', response.data)
        console.log(response.data);
      });  
    },
  },
  mutations: {
    // mutations（改變資料狀態） 
    // actions（操作行為）只能取得資料，不能改變狀態
    DOGS(state, payload) {
      state.dogs = payload;  
    },
    CATS(state, payload) {
      state.cats = payload;
    }
  },
  // getters: {
  //   dogs(state) {
  //     return state.dogs;
  //   }
  // },
  modules: {
  }
})
