import { ref } from 'vue'
import { defineStore } from 'pinia'
import cotidiano from '../assets/primerApartadoHome/imagenUsoCotidiano.webp'
import deportivas from '../assets/primerApartadoHome/imagenDeportivas.webp'

export const usePrimerApartadoHome = defineStore('primerApartadoHome', () => {
  const datos = ref([
    {
      src: cotidiano,
      to: '/sillas-de-uso-diario'
    },
    {
      src: deportivas,
      to: '/sillas-deportivas'
    }
  ])
  return {
    datos
  }
})
