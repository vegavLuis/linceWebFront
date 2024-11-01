import { io } from 'socket.io-client'

//const URL = import.meta.env.VITE_URL
// const URL = 'http://89.116.191.144'
const URL = 'wss://app.roe-mex.com.mx:3000'

export const socket = io(URL)

// Manejadores de eventos
socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket')
})

socket.on('connect_error', (error) => {
  console.error('Error de conexión:', error)
})
