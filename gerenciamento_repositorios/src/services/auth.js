import { hash, compare } from "bcryptjs";

export const createPasswordHash = async (senha) => {
  return await hash(senha, 10)
}

export const checkPassword = async (user, password) => {
  return await compare(password, user.password)}