import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Navi from '../views/Navi.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/navi',
    name: 'Navi',
    component: Navi
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
