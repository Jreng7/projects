import mongoose from "mongoose";
import config from "../config/conexaomongo";

class Database {

  static async conexaoBanco() {
    try {
      await mongoose.connect(config.url)
      console.log('🟢 Conectado ao MongoDB')

    } catch (err) {
      console.error('🔴 Falha crítica:', err)
      process.exit(1); 
    }
  }
}

export default Database