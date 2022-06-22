import { createRouter, createWebHistory } from 'vue-router'
import StatBrowser from '../views/StatBrowser.vue'
import Game from '../views/Game.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'StatBrowser',
    component: StatBrowser
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  mode: 'hash',
  routes
})

export default router
