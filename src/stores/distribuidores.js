import { defineStore } from 'pinia'
import { ref } from 'vue'
import logo1 from '../assets/distribuidores/logo1.webp'
import logo2 from '../assets/distribuidores/logo2.webp'
import logo3 from '../assets/distribuidores/logo3.webp'
import logo4 from '../assets/distribuidores/logo4.webp'
import logo5 from '../assets/distribuidores/logo5.webp'

export const useDistribuidores = defineStore('distribuidores', () => {
  const datos = ref([
    {
      src: logo1
    },
    {
      src: logo2
    },
    {
      src: logo3
    },
    {
      src: logo4
    },
    {
      src: logo5
    }
  ])
  return {
    datos
  }
})
