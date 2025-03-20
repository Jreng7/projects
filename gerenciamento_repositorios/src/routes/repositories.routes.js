import { Router } from "express"
import RepositoriesController from "../controllers/Repository.Controller.js"
import { loginController } from '../controllers/Session.Controller'
import { authMiddleware } from '../middlewares/auth.login.js'


const repositoryRouter = Router()

repositoryRouter.put('login', loginController.login)

repositoryRouter.use(authMiddleware)

repositoryRouter.get('/', RepositoriesController.index)
repositoryRouter.post('/', RepositoriesController.create);
repositoryRouter.delete('/:id_repo', RepositoriesController.remove);

export { repositoryRouter }