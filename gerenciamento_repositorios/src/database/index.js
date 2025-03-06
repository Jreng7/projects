import mongoose from "mongoose";
import config from '../config/conexaoMongoose'

class Database {
  constructor(){
    this.connection = mongoose.connect(
      config.url,
      {
        useNetUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
} 

export default new Database()