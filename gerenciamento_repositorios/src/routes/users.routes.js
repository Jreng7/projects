import { Router } from 'express'
import { UserController } from '../controllers/User.Controller.js'

export const usersRouter = Router()

usersRouter.get('/', UserController.index)
usersRouter.get('/:id', UserController.show)
usersRouter.put('/:id', UserController.update)
usersRouter.delete('/:id', UserController.remove)
