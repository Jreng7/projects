import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import auth from '../config/auth-jwt.js';
import bcrypt from 'bcryptjs';
import { loginSchema } from '../schemas/user.schema.js';

class LoginController {
  async login(req, res, next) {
    try {
      const { email, password } = loginSchema.parse(req.body);
      
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ error: 'User/Password invalid.' });
      }

      const hashIsValid = await bcrypt.compare(password, user.password);
      if (!hashIsValid) {
        return res.status(401).json({ error: 'User/Password invalid.' });
      }

      const { _id } = user;

      const token = jwt.sign({ _id }, auth.secret, { expiresIn: auth.expiresIn });

      return res.json({ user: { _id, email }, token });

    } catch (err) {
      console.error(err)
      next()
    }
  }
}

export const loginController = new LoginController();