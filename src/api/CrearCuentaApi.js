import api from '@/lib/axios.js'

export default {
  createUser(data) {
    return api.post('usuarios/', data)
  }
}
