import { ref } from 'vue'
import { defineStore } from 'pinia'

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
        { nombre: 'Inicio', link: '/' },
        { nombre: '¿Quienes Somos?', link: '/quienes-somos' },
        { nombre: 'Terminos y Condiasdiones', link: '/' },
        { nombre: 'Aviso de Privacidad', link: '/' },
        { nombre: 'Comunicados', link: '/' }
      ]
    },
    {
      nombre: 'Sillas de Ruedas',
      hijos: [
        { nombre: 'Sillas de Uso Diario', link: '/' },
        { nombre: 'Sillas Infantiles', link: '/' },
        { nombre: 'Sillas de Ruedas Deportivas', link: '/' },
        { nombre: 'Sillas de Ruedas Perzonalizadas', link: '/' }
      ]
    },
    {
      nombre: 'Refacciones',
      hijos: [
        { nombre: 'Ruedas traseras y aros de avance', link: '/' },
        { nombre: 'Ruedas delanteras o casters', link: '/' },
        { nombre: 'Llantas', link: '/' },
        { nombre: 'Ejes y baleros', link: '/' },
        { nombre: 'Frenos', link: '/' },
        { nombre: 'Sujetadores o amarres', link: '/' }
      ]
    },
    {
      nombre: 'Accesorios',
      hijos: [
        { nombre: 'Cojines', link: '/' },
        { nombre: 'Respaldos', link: '/' }
      ]
    },
    {
      nombre: 'More',
      hijos: [
        { nombre: 'Promociones', link: '/' },
        { nombre: 'Contacto', link: '/' }
      ]
    }
  ])
  return {
    barra
    // datos
  }
})
