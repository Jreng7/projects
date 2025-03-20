import { Router } from 'express'
import { usersRouter } from './users.routes.js'
import { repositoryRouter } from './repositories.routes.js'
import { session } from '../controllers/Session.Controller.js'
// import { authMiddleware } from '../middlewares/auth.login.js'

export const router = Router()

router.post('/sessions', session.login)

// router.use(authMiddleware)
router.use('/users', usersRouter)
router.use('/users/:user_id/repositories', repositoryRouter)
