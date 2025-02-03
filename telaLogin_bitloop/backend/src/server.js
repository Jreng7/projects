import express from 'express'
import { router } from './routes.js'
import cors from 'cors'

const server = express()
server.use(cors()) // Cross Origin Resource Sharing (CORS)
server.use(express.json())
server.use(router)

server.listen(3333, () => {
  console.log('Listening on port 3333')
})