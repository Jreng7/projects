import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import auth from '../config/auth-jwt.js'
import { loginSchema } from '../schemas/user.schema.js'


export class SessionsController {
  
  constructor(authService) {
    this.authService = authService
  }

  async login(req, res) {

    const { email, password } = loginSchema.parse(req.body)

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'User / Password invalid.' })
    }

    const hashIsValid = await this.authService.compareHash(password, user.password)
    if (!hashIsValid) {
      return res.status(401).json({ error: 'User / Password invalid.' });
    }

    const { _id } = user 
    
    return res.json({
      user: { _id, email }, 
      token: jwt.sign({ _id }, auth.secret, { expiresIn: auth.expiresIn })
    })

  }
}