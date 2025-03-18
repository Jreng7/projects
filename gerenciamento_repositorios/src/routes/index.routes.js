import { Router } from 'express'

import { usersRouter } from './users.routes.js'
import { repositoryRouter } from './repositories.routes.js'

export const router = Router()

router.use('/users', usersRouter)
router.use('/users/:user_id/repositories', repositoryRouter)
