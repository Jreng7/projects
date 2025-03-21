import { Router } from 'express'
import { usersRouter } from './users.routes.js'
import { repositoryRouter } from './repositories.routes.js'
import { loginController } from '../controllers/Session.Controller.js'
import { authMiddleware } from '../middlewares/auth.login.js'
import { UserController } from '../controllers/User.Controller.js'

export const router = Router()

router.post('/login', loginController.login)
router.post('/users', UserController.register)

router.use(authMiddleware); 

router.use('/users', usersRouter)
router.use('/users/:user_id/repositories', repositoryRouter)
