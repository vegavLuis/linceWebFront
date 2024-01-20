import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://191.101.232.150/api/'
  baseURL: 'http://localhost:3000/api/'
})
export default api
