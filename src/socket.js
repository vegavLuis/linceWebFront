import { io } from 'socket.io-client'

// const URL = 'http://localhost:3000'
const URL = 'https://89.116.191.144'

export const socket = io(URL)
