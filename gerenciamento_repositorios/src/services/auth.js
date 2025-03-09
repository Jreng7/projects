import { hash, compare } from "bcryptjs";

export const createPasswordHash = async (parametro) => {
  return await hash(parametro, 10)
}


export const checkPassword = async (user, password) => {
  return await compare(password, user.password)}