import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('useApp', {
  state: () => ({
    barra: [
      {
        nombre: 'Bienvenidos',
        hijos: [
          { nombre: 'Inicio' },
          { nombre: '¿Quienes Somos?' },
          { nombre: 'Terminos y Condiciones' },
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
    ]
  })
})
