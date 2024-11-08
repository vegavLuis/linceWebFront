import { io } from 'socket.io-client'

//const URL = import.meta.env.VITE_URL
const URL = 'http://localhost:3000'
// const po = 3000
// const URL = `wss://app.roe-mex.com.mx${po}`

export const socket = io(URL)
