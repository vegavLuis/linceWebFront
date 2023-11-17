import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/quienes-somos',
      name: 'quienes-somos',
      component: () => import('../views/QuienesSomos.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '*',
      component: () => import(/* webpackChunkName: "tienda" */ '@/views/Error.vue')
    }
  ]
})

export default router
