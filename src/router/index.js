import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import ApiSobre from '../views/ApiSobre.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
  , {
    path: '/api-sobre',
    name: 'Api',
    component: ApiSobre
  }
]

const router = new VueRouter({
  routes
})

export default router
