import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('useApp', {
  state: () => ({
    barra: [
      { nombre: 'Bienvenidos' },
      {
        nombre: 'Sillas de Ruedas',
        hijos: [
          { nombre: 'Sillas de Uso Diario' },
          { nombre: 'Sillas Infantiles' },
          { nombre: 'Sillas de Ruedas Deportivas' },
          { nombre: 'Sillas de Ruedas Perzonalizadas' }
        ]
      },
      { nombre: 'Refacciones' },
      { nombre: 'Accesorios', hijos: [{ nombre: 'Cojines' }, { nombre: 'Respaldos' }] },
      { nombre: 'More' }
    ]
  })
})
