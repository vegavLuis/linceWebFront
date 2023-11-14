import { ref } from 'vue'
import { defineStore } from 'pinia'
import primerVideo from '../assets/testimonios/primerVideo.mp4'
import segundoVideo from '../assets/testimonios/segundoVideo.mp4'

export const useTestimonios = defineStore('testimonios', () => {
  const datos = ref([
    {
      src: primerVideo
    },
    {
      src: segundoVideo
    }
  ])
  return {
    datos
  }
})
