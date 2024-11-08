import axios from 'axios'

const api = axios.create({
  //baseURL: '/api/'
  // baseURL: 'http://localhost:3000/api/'
  baseURL: 'https://app.roe-mex.com.mx/api/'
})
export default api
