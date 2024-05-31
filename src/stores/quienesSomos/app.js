import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppQuienesSomos = defineStore('appQuienesSomos', () => {
  const data = ref([
    {
      titulo: '¿QUIÉNES SOMOS?',
      texto: `Somos una empresa mexicana dedicada a la fabricación de sillas de ruedas de uso diario y deportivas desde 1987.
      Sillas LINCE inició como una necesidad personal, el fundador y creador de la empresa, y los modelos de sillas es una atleta paralímpico, el señor Raúl Ortega.
      Las circunstancias fueron las que impulsaron a nuestro fundador a crear algo más, a innovar y crear una silla de ruedas óptima para él y para su desempeño en basquetbol. Y así fue como una necesidad personal se convirtió en una oportunidad de negocio.
      Cada persona tiene distintas necesidades, por lo tanto cada silla es diferente, todas las sillas son elaboradas para llevar su día a día o su disciplina al máximo.`
    },
    {
      titulo: 'NOSOTROS',
      texto: `Elaboramos sillas de ruedas personalizadas en medidas y necesidades, especializadas en el estilo de vida de cada persona, creadas de manera única. La estructura está elaborada en una aleación aeronáutica de aluminio, que permite un peso mínimo y una estructura fuerte, segura, resistente y de calidad.
      El diseño de las sillas es planificado y creado cuidadosamente por ingenieros mexicanos, quienes también someten al prototipo a varias pruebas de calidad y resistencia para verificar que sea óptimo para la disciplina que ha sido creada, por lo cual es que estamos comprometidos a dotar de calidad cada uno de nuestros modelos.
      Tenemos más de 32 años en el mercado, los cuales respaldan nuestra marca y la calidad que nuestras sillas tienen. Nos encargamos de crear un producto funcional, seguro y lleno de calidad, el cual debe de cubrir las necesidades que nuestros clientes tienen, no siempre, ni todas las personas tienen las mismas necesidades o capacidades, cada persona tiene un estilo de vida diferente por lo cual cada persona necesita una silla hecha a su medida.`
    },
    {
      titulo: 'MISIÓN',
      texto: `Elaborar sillas de ruedas personalizadas, conocer a los usuarios de las sillas para así poderlas realizar de acuerdo a las necesidades, medidas antropométricas, lesión y estilo de vida que cada individuo, hechas en México con diseños innovadores y de la más alta calidad.`
    },
    {
      titulo: 'VISIÓN',
      texto: `Seguir innovando, creando y perfeccionando las sillas de ruedas hasta lograr que tengan la más alta calidad, dotandolas de atributos para lo que han sido creadas.`
    }
  ])
  return {
    data
  }
})
