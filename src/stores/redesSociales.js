import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRedesSociales = defineStore('redesSociales', () => {
  const data = ref([
    {
      icon: 'mdi-facebook',
      to: 'https://www.facebook.com/sillasderuedasLINCEporROEMEX/',
      color: '#3b5998',
      texto: 'Conoce nuestras experiencias'
    },
    {
      icon: 'mdi-gmail',
      to: 'mailto:sillaslince@gmail.com',
      color: '#ef5350',
      texto: 'Quejas y sugerencias'
    },
    {
      icon: 'mdi-whatsapp',
      to: 'https://api.whatsapp.com/send?phone=5215581020704',
      color: '#128c7e',
      texto: 'Contactanos de 9:30 am a 17:30 pm'
    },
    {
      icon: 'mdi-phone',
      to: 'tel:+525581020704',
      color: '#0D47A1',
      texto: 'Llamanos de 9:30 am a 17:30 pm'
    }
  ])
  return {
    data
  }
})
