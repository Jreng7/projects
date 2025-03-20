import z from 'zod';
import bcrypt from 'bcryptjs';
import User from '../models/User.js'
import { createUserSchema, updateUserSchema } from '../schemas/user.schema.js'


class UsersController {

  async index(req, res) {

    try {
      const users = await User.find() 
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

      const schemaValidator = createUserSchema.parse(req.body)
      const { email, password } = schemaValidator

      const user = await User.findOne({ email });
      if (user) {
        return res.status(422).json({ message: `User ${email} already exists.` })
      }

      const encryptedPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({ email, password: encryptedPassword })

      return res.status(201).json({
        id: newUser._id,
        email: newUser.email,
        createdAt: newUser.createdAt
      });

    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ error: "Dados inválidos" });
      }
      console.error(err);
      return res.status(500).json({ error: 'Erro interno' });
    }
  }

  async update(req, res) {
    try {

      const schemaValidator = updateUserSchema.parse(req.body)

      const { id } = req.params
      const { email, password } = schemaValidator

      const user = await User.findById(id)
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." })
      }

  
      if (password) {
      const isSamePassword = await bcrypt.compare(password, user.password);
      
      if (isSamePassword) {
        return res.status(400).json({ error: "A nova senha não pode ser igual à anterior." });
      }

        // Gera novo hash APENAS se a senha for diferente
      schemaValidator.password = await bcrypt.hash(password, 10);
    }

      await user.updateOne({ 
        email,
        password: schemaValidator.password || user.password // Fallback seguro
      });


      return res.status(204).end();
    } catch (err) {
        if (err instanceof z.ZodError) {
          return res.status(400).json({ error: "Dados inválidos." });
        }
    
        console.error(err);
        return res.status(500).json({ error: "Internal server error." });
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

export const UserController = new UsersController()