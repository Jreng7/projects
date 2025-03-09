import { hash, compare } from "bcryptjs";

export const createPasswordHash = async (parametro) => {
  return await hash(parametro, 10)
}


export const checkPassword = async (user, password) => {
  compare(password, user.password)}