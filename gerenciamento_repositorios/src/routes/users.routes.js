import { Router } from 'express'
import UsersController from '../controllers/User.Controller.js'
import { loginController } from '../controllers/Session.Controller.js'
import { authMiddleware } from '../middlewares/auth.login.js'

export const usersRouter = Router()

usersRouter.put('/login', loginController.login)

usersRouter.use(authMiddleware)

usersRouter.get('/', UsersController.index)
usersRouter.get('/:id', UsersController.show)
usersRouter.post('/', UsersController.create)
usersRouter.put('/:id', UsersController.update)
usersRouter.delete('/:id', UsersController.remove)
