import app from './app.js'
import conexaoBanco from './database/index.js'

import { config } from 'dotenv'
config()

const port = process.env.PORT || 3033

async function startServer() {
  await conexaoBanco()

  app.listen(port, () => {
    console.log(`Server running at port http://localhost:${port}`)
  })

}

startServer()
