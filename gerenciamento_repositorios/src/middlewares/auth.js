import jwt from 'jsonwebtoken'
import auth from '../config/auth-jwt.js'

export default async (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1] // const authHeader = req.headers.authorization
  console.log(req.headers.authorization); 

  if (!token) {
    return res.status(401).json({ error: 'Token was not provided' })
  }
  
  try {
    const decoded = jwt.verify(token, auth.secrect)

    req.userId = decoded.id
    return next()
    
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token.' })
  }
}