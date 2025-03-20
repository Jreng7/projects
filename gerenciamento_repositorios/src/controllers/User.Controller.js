import z from 'zod';
import User from '../models/User.js'
import { createUserSchema, updateUserSchema } from '../schemas/user.schema.js'


export class UsersController {

  constructor(authService) {
    this.authService = authService
  }

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

      const schemaValidator = createUserSchema.parse(req.body)
      const { email, password } = schemaValidator

      const user = await User.findOne({ email });
      if (user) {
        return res.status(422).json({ message: `User ${email} already exists.` })
      }

      const encryptedPassword = await this.authService.createHash(password)
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

          // Verifica se foi enviada uma nova senha
      if (password) {
         // Compara a NOVA senha com o hash ANTIGO (para evitar hash desnecessário)
      const isSamePassword = await this.authService.compareHash(password, user.password);
      
      if (isSamePassword) {
        return res.status(400).json({ error: "A nova senha não pode ser igual à anterior." });
      }

        // Gera novo hash APENAS se a senha for diferente
      schemaValidator.password = await this.authService.createHash(password);
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