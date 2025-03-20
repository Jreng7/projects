import { Router } from 'express'
import { authService } from '../services/AuthServiceBcrypt.js'
import { UsersController } from '../controllers/User.Controller.js'

export const usersRouter = Router()
const usersController = new UsersController(authService);

usersRouter.get('/', usersController.index)
usersRouter.get('/:id', usersController.show)
usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)
usersRouter.delete('/:id', usersController.remove)
