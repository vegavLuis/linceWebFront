import { defineStore } from 'pinia'
import { ref } from 'vue'
import imagen1 from '../assets/bannerSillas/1.webp'
import imagen2 from '../assets/bannerSillas/2.webp'
import imagen3 from '../assets/bannerSillas/3.webp'
import imagen4 from '../assets/bannerSillas/4.webp'
import imagen5 from '../assets/bannerSillas/5.webp'
import fondoImagen1 from '../assets/bannerSillas/fondo.webp'
import fondoImagen2 from '../assets/bannerSillas/fondo2.webp'
import fondoImagen3 from '../assets/bannerSillas/fondo3.webp'
import fondoImagen4 from '../assets/bannerSillas/fondo4.webp'
import fondoImagen5 from '../assets/bannerSillas/fondo5.webp'

export const useBannerSillas = defineStore('bannerSillas', () => {
  const datos = ref([
    {
      src: imagen1,
      nombre: 'Lince',
      subnombre: 'MX3',
      fondo: fondoImagen1
    },
    {
      src: imagen2,
      nombre: 'Lince',
      subnombre: 'Sky',
      fondo: fondoImagen2
    },
    {
      src: imagen3,
      nombre: 'LINCE',
      subnombre: 'Shockwabe',
      fondo: fondoImagen3
    },
    {
      src: imagen4,
      nombre: 'LINCE',
      subnombre: 'Explorer',
      fondo: fondoImagen4
    },
    {
      src: imagen5,
      nombre: 'LINCE',
      subnombre: '2EZ BKB',
      fondo: fondoImagen5
    }
  ])
  return {
    datos
  }
})
