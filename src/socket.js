import { io } from 'socket.io-client'

//const URL = import.meta.env.VITE_URL
// const URL = 'http://89.116.191.144'
const URL = 'https://app.roe-mex.com.mx'

export const socket = io(URL)
