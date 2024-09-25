import api from '@/lib/axios.js'

export default {
  createUser(data) {
    // return console.log('esta es la data', data)
    return api.post('usuarios/', data)
  }
}
