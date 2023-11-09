import { ref } from 'vue'
import { defineStore } from 'pinia'
import cotidiano from '../assets/primerApartadoHome/imagenUsoCotidiano.webp'
import deportivas from '../assets/primerApartadoHome/imagenDeportivas.webp'

export const usePrimerApartadoHome = defineStore('primerApartadoHome', () => {
  const datos = ref([
    {
      src: cotidiano
    },
    {
      src: deportivas
    }
  ])
  return {
    datos
  }
})
