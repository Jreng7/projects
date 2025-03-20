import { hash, compare } from "bcryptjs";

export class AuthService {

  async createHash(senha) {
    return await this.hash(senha, 10)
  }

  async compareHash(password, hashUser) {
    return await this.compare(password, hashUser); // Dependência direta
  }
  
}

export const authService = new AuthService();