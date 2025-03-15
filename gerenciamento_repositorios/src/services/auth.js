import { hash, compare } from "bcryptjs";

export async function createPasswordHash(senha) {
  return await hash(senha, 10)
}

export async function checkPasswordHash(password, user) {
  return await compare(password, user.password)
}   