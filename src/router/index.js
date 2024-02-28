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
      path: '/sillas-de-uso-diario',
      name: 'sillas-de-uso-diario',
      component: () =>
        import(/* webpackChunkName: "sillas-de-uso-diario" */ '../views/UsoDiario.vue')
    },
    {
      path: '/sillas-deportivas',
      name: 'sillas-deportivas',
      component: () =>
        import(/* webpackChunkName: "sillas-deportivas" */ '../views/SillasDeportivas.vue')
    },
    {
      path: '/sillas-infantiles',
      name: 'sillas-infantiles',
      component: () =>
        import(/* webpackChunkName: "sillas-infantiles" */ '../views/SillasInfantiles.vue')
    },
    {
      path: '/outlet',
      name: 'outlet',
      component: () => import(/* webpackChunkName: "sillas-infantiles" */ '../views/Outlet.vue')
    },
    {
      path: '/outlet/:id',
      name: 'outletId',
      component: () =>
        import(/* webpackChunkName: "sillas-infantiles" */ '../views/OutletProducto.vue')
    },
    {
      path: '/testimonios',
      name: 'testimonios',
      component: () =>
        import(/* webpackChunkName: "sillas-infantiles" */ '../views/Testimonios.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '*',
      component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
    }
  ]
})

export default router
