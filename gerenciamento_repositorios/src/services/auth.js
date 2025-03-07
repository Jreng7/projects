import { hash } from "bcryptjs";

const createPasswordHash = async (parametro) => {
  return await hash(parametro, 10)
}

export { createPasswordHash }