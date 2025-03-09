import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import auth from '../config/auth-jwt.js'

export default async (req, res, next) => {

  const { authorization: authHeader } = req.headers // const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token was not provided' })
  }

  const parts = authHeader.spli(' ')

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ error: "Formato de token inválido." })
  }

  const [, token] = parts

  try {
    const decoded = await promisify(jwt.verify(token, auth.secrect))

    req.userId = decoded.id
    return next()
    
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token.' })
  }
}