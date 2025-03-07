import User from '../models/User.js'
import { createPasswordHash } from '../services/auth.js'


class UsersController {

  async index(req, res) {

    try {
      const users = await User.find() // Lista todos os usuários
      return res.json(users)

    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }

  }

  async show(req, res) {
     try {

      const { id } = req.params
      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      return res.json(user)

     } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal server error.' })
     }
  }

  async create(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email });

      if (user) {
        return res.status(422).json({ message: `User ${email} already exists.` })
      }

      const encryptedPassword = await createPasswordHash(password)
      
      const newUser = await User.create({ email, password: encryptedPassword })
      return res.status(201).json(newUser)

    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { email, password } = req.body

      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." })
      }

      const encryptedPassword = await createPasswordHash(password)
      await user.updateOne({ email, password: encryptedPassword})
    
      return res.status(204).end()

    } catch (error) {
      return res.status(500).json({ error: "Internal server error." })
    }
  }

  async remove(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." })
      }

      await user.deleteOne()
      return res.status(204).end()

    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: "Internal server error." })
    }
  }

}

export default new UsersController()