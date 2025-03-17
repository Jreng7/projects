import { hash, compare } from "bcryptjs";

export class AuthService {

  constructor(hash, compare) {
    this.hash = hash;
    this.compare = compare
  }

  async createHash(senha) {
    return await this.hash(senha, 10)
  }

  async compareHash(password, user) {
    return await this.compare(password, user.password); // Dependência direta
  }
  
}

export const authService = new AuthService(hash, compare);