import { io } from 'socket.io-client'

const URL = 'http://localhost:3000'
// const URL = "http://191.101.232.150/";

export const socket = io(URL)
