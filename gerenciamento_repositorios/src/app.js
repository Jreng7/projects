import express, { Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'

class App {

  constructor(){
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.server.use(cors())
    this.server.use(helmet())
    this.server.use(express.json())
    
  }

  routes(){

    const router = Router()

    router.get('/ping', (req, res) => {
    
    })  

    this.server.use(router)
  }

}


export default new App().server;