import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    dogs: [],
    cats: [],
    pet: {}
  },
  actions: {
    getDogs(context) {
      const api = 'http://localhost:3000/dogs';
      axios.get(api).then((response) => {
        context.commit('DOGS', response.data)  
      }); 
    }, 
    getCats(context) {
      const api = 'http://localhost:3000/cats';
      axios.get(api).then((response) => {
        context.commit('CATS', response.data)
      });  
    },
    petProfile(context, pet) {
      // const api = `http://localhost:3000/${animal}/${id}`;
      context.commit('PET', pet)
    }
  },
  mutations: {
    // mutations（改變資料狀態） 
    // actions（操作行為）只能取得資料，不能改變狀態
    DOGS(state, payload) {
      state.dogs = payload.reverse();  
    },
    CATS(state, payload) {
      state.cats = payload.reverse();
    },
    PET(state, payload) {
      state.pet = payload;      
    }
  },
  modules: {
  }
})
