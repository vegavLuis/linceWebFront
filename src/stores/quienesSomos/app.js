import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppQuienesSomos = defineStore('appQuienesSomos', () => {
  const data = ref([
    {
      titulo: 'Historia',
      texto: `Sillas Lince nace hace más de 30 años a partir de la necesidad de un joven deportista de alto rendimiento, en busca de una silla de ruedas funcional y ligera que le ayude a desarrollar sus habilidades deportivas y mejore su movilidad en su vida diaria, al no poder encontrar una opción se dio a la tarea de desarrollar el mismo sus propias sillas, con el tiempo y buscando siempre la mejor forma de innovar, los modelos fueron cambiando,  así como los materiales que al día de hoy destacan a sillas lince como la única empresa en Latino América en fabricar sillas de ruedas personalizadas deportivas y de uso cotidiano en aluminio aeronáutico.
        Diseñadas por personas con discapacidad para personas con discapacidad 
        `
    },
    {
      titulo: 'Misión',
      texto: `Nuestra misión es fabricar un producto que sea personalizado para cada individuo en su estilo de vida que necesite.

      Nosotros pugnamos para proveer una silla ligera e individual, como si fuera un sastre, con el objetivo de que el producto permita el uso final a la vida que quieren, en vez de que la silla los limite.
      
      Nosotros no somos sólo una fabrica de sillas, construimos sillas activas, para personas con discapacidad activa.
      
      Ligeras y hechas a mano en México, ROE-MEX ("sillas de ruedas deportivas y activas es una de la elecciones por muchos de los mejores atletas de alto rendimiento del mundo!!!") Ya sea esta en la cancha o de día a día.
      
          `
    },
    {
      titulo: 'Visión',
      texto: `La visión fue crear una silla de ruedas que permita el desarrollo y que no se viera como ninguna otra silla en el mercado en ese tiempo. Después de 2 años la pasión y la ambición cobró vida y mas fuerza que nunca! Y se formo ROE-MEX

        ROE-MEX tiene el mismo y simple acercamiento que hizo por mas de 25 años atrás y continua innovando y creando un producto que sostiene el abuso de algunos de los mejores atletas y permitiendo que se exhiba un hermoso arte entre el control de la silla y la ruda habilidad atlética.
        
        Nosotros continuaremos empujado e innovando productos que permitan que cualquiera que presente una discapacidad y la correcta actitud haga que sus metas se lleven acabo. 
            `
    }
  ])
  return {
    data
  }
})
