import api from '@/lib/axios.js'

export default {
  getOutletAll() {
    return api.get('/outlet')
  },
  getOutletByIdProducto(id) {
    return api.get('/outlet/producto/' + id)
  }
}
