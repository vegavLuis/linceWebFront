import api from '../lib/axios.js'

export default {
  createCotizacion(data) {
    const token = localStorage.getItem('AUTH_TOKEN')
    // return console.log('esta es la cotizacion', data)
    return api.post('cotizaciones/', data, {
      headers: {
        Authorization: `Baerer ${token}`
      }
    })
  }
}
