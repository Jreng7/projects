import jwt from 'jsonwebtoken'
import User from './Users.Controller'
import { checkPassword } from '../services/auth'
import authConfig from '../config/auth-jwt.js'

class SessionController {
  async create(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ error: 'User / Password invalid.' })
    }

    if (!checkPassword(user, password)) {
      return res.status(401).json({ error: 'User / Password invalid.' })
    }

    const { id } = user 

    return res.json({ user: { id, email }, token: jwt.sign({ id }), authConfig.secrect})

  }
}

export default new SessionController()