import app from './app.js'
import Database from './database/index.js'

const PORT = 5000

const startServer = async () => {
  await Database.conexaoBanco()
  app.listen(PORT, () => {
    console.log(`Server running at port http://localhost:${PORT}`)
  })
}

startServer()