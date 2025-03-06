import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './routes/routes.js';

dotenv.config();

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
    this.server.use(router)
  }

}


export default new App().server;