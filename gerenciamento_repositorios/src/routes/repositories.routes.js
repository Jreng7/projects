import { Router } from "express"
import RepositoriesController from "../controllers/Repository.Controller.js"

const repositoryRouter = Router()

repositoryRouter.get('/', RepositoriesController.index)
repositoryRouter.post('/', RepositoriesController.create);
repositoryRouter.delete('/:id_repo', RepositoriesController.remove);

export { repositoryRouter }