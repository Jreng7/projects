import mongoose from "mongoose";
import config from '../config/conexaomongo.js'

class ConexaoDatabase {

  async conexaoBanco(){
    try {
      
      await mongoose.connect(config.url)

      console.log('🟢 Conectado ao MongoDB')
    } catch (err) {
      console.error('🔴 Server not found.', err)
      process.exit(1)
    }
  }

}

export default new ConexaoDatabase().conexaoBanco