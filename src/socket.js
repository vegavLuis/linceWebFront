import { io } from 'socket.io-client'

//const URL = import.meta.env.VITE_URL
// const URL = 'http://89.116.191.144'
const URL = 'wss://app.roe-mex'

export const socket = io(URL)
