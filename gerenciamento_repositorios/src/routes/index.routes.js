import { Router } from 'express'
import { usersRouter } from './users.routes.js'
import { repositoryRouter } from './repositories.routes.js'
import { authService } from '../services/AuthServiceBcrypt.js'
import { SessionsController } from '../controllers/Session.Controller.js'

export const router = Router()

const sessionLogin = new SessionsController(authService)

router.post('/sessions', sessionLogin.login)
router.use('/users', usersRouter)
router.use('/users/:user_id/repositories', repositoryRouter)
