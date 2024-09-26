import axios from 'axios'

const api = axios.create({
  baseURL: 'http://89.116.191.144/api'
  // baseURL: 'http://localhost:3000/api/'
})
export default api
