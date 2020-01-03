import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/pets/:species/:id',
    name: 'pets',
    component: Pets
  },
]

const router = new VueRouter({
  routes
})

export default router
