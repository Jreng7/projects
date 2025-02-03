import express from 'express'
import { router } from './routes.js'

const server = express()
server.use(express.json())
server.use(router)

server.listen(3333, () => {
  console.log('Listening on port 3333')
})