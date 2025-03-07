import bcrypt from "bcryptjs";

const createPasswordHash = async (parametro) => {
  return await bcrypt.hash(parametro, 10)
}

export { createPasswordHash }