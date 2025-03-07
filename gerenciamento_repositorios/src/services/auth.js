import bcrypt from "bcryptjs";

const createPasswordHash = async(password) => {
  bcrypt.hash()
}


export { createPasswordHash }