import { ref } from 'vue'
import { defineStore } from 'pinia'
import imagen from '../assets/prueb.webp'

// export const useAppStore = defineStore('useApp', {
//   state: () => ({
//     barra: [
//       {
//         nombre: 'Bienvenidos',
//         hijos: [
//           { nombre: 'Inicio' },
//           { nombre: '¿Quienes Somos?' },
//           { nombre: 'Terminos y Condiciones' },
//           { nombre: 'Aviso de Privacidad' },
//           { nombre: 'Comunicados' }
//         ]
//       },
//       {
//         nombre: 'Sillas de Ruedas',
//         hijos: [
//           { nombre: 'Sillas de Uso Diario' },
//           { nombre: 'Sillas Infantiles' },
//           { nombre: 'Sillas de Ruedas Deportivas' },
//           { nombre: 'Sillas de Ruedas Perzonalizadas' }
//         ]
//       },
//       {
//         nombre: 'Refacciones',
//         hijos: [
//           { nombre: 'Ruedas traseras y aros de avance' },
//           { nombre: 'Ruedas delanteras o casters' },
//           { nombre: 'Llantas' },
//           { nombre: 'Ejes y baleros' },
//           { nombre: 'Frenos' },
//           { nombre: 'Sujetadores o amarres' }
//         ]
//       },
//       { nombre: 'Accesorios', hijos: [{ nombre: 'Cojines' }, { nombre: 'Respaldos' }] },
//       { nombre: 'More', hijos: [{ nombre: 'Promociones' }, { nombre: 'Contacto' }] }
//     ]
//   })

// })

export const useAppStore = defineStore('useApp', () => {
  const barra = ref([
    {
      nombre: 'Bienvenidos',
      hijos: [
        { nombre: 'Inicio' },
        { nombre: '¿Quienes Somos?' },
        { nombre: 'Terminos y Condiasdiones' },
        { nombre: 'Aviso de Privacidad' },
        { nombre: 'Comunicados' }
      ]
    },
    {
      nombre: 'Sillas de Ruedas',
      hijos: [
        { nombre: 'Sillas de Uso Diario' },
        { nombre: 'Sillas Infantiles' },
        { nombre: 'Sillas de Ruedas Deportivas' },
        { nombre: 'Sillas de Ruedas Perzonalizadas' }
      ]
    },
    {
      nombre: 'Refacciones',
      hijos: [
        { nombre: 'Ruedas traseras y aros de avance' },
        { nombre: 'Ruedas delanteras o casters' },
        { nombre: 'Llantas' },
        { nombre: 'Ejes y baleros' },
        { nombre: 'Frenos' },
        { nombre: 'Sujetadores o amarres' }
      ]
    },
    { nombre: 'Accesorios', hijos: [{ nombre: 'Cojines' }, { nombre: 'Respaldos' }] },
    { nombre: 'More', hijos: [{ nombre: 'Promociones' }, { nombre: 'Contacto' }] }
  ])
  const datos = ref([
    {
      src: imagen,
      text: 'primera'
    }
  ])
  return {
    barra,
    datos
  }
})
