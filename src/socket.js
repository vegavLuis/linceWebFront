import { io } from 'socket.io-client'

//const URL = import.meta.env.VITE_URL
// const URL = 'http://localhost'
// const po = 3000
// const URL = `http://app.roe-mex.com.mx`
const URL = `http://localhost:3000`

export const socket = io(URL)
