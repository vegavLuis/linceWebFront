import { defineStore } from 'pinia'
import { ref } from 'vue'
import imagen1 from '../assets/bannerSillas/1.webp'
import imagen2 from '../assets/bannerSillas/2.webp'
import imagen3 from '../assets/bannerSillas/3.webp'
import imagen4 from '../assets/bannerSillas/4.webp'
import imagen5 from '../assets/bannerSillas/5.webp'

export const useBannerSillas = defineStore('bannerSillas', () => {
  const datos = ref([
    {
      src: imagen1,
      texto: ''
    },
    {
      src: imagen2,
      texto: ''
    },
    {
      src: imagen3,
      texto: ''
    },
    {
      src: imagen4,
      texto: ''
    },
    {
      src: imagen5,
      texto: ''
    }
  ])
  return {
    datos
  }
})
