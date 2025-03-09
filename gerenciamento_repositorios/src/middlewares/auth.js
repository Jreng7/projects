import jwt from 'jsonwebtoken'
import auth from '../config/auth-jwt.js'

export default async (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token was not provided' })
  }

  const authenticated = true

  if (authenticated) {
    return next()
  } else {
    return res.status(401).end()
  }
} 