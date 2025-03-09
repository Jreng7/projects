import jwt from 'jsonwebtoken'
import auth from '../config/auth-jwt.js'

export default async (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token was not provided' })
  }

  const parts = authHeader.spli(' ')

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ error: "Formato de token inválido." })
  }

  const [, token] = parts

  const authenticated = true

  if (authenticated) {
    return next()
  } else {
    return res.status(401).end()
  }
} 