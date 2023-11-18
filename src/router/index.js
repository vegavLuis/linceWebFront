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
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/quienes-somos',
      name: 'quienes-somos',
      component: () => import(/* webpackChunkName: "quienes-somos" */ '../views/QuienesSomos.vue')
    },
    {
      path: '/terminos-condiciones',
      name: 'terminos-condiciones',
      component: () =>
        import(/* webpackChunkName: "terminos-condiciones" */ '../views/TerminosCondiciones.vue')
    },
    {
      path: '/aviso-de-privacidad',
      name: 'aviso-de-privacidad',
      component: () =>
        import(/* webpackChunkName: "aviso-de-privacidad" */ '../views/AvisoPrivacidad.vue')
    },
    {
      path: '/comunicados',
      name: 'comunicados',
      component: () => import(/* webpackChunkName: "comunicados" */ '../views/Comunicados.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '*',
      component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
    }
  ]
})

export default router
