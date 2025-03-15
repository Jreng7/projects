import app from './app.js'
import Database from './database/index.js'
import { config } from 'dotenv'

config()

const port = process.env.PORT || 3033

const startServer = async () => {
  await Database.conexaoBanco()
  app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`)
  })
}

startServer()