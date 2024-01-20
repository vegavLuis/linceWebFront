import api from '@/lib/axios.js'

export default {
  getOutletAll() {
    return api.get('/outlet')
  },
  getOutletByIdProducto(id) {
    // return console.log('este es el dato desde la api', id)
    return api.get('/outlet/producto/' + id)
  }
}
