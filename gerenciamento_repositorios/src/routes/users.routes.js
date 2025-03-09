import { Router } from "express";

import UsersController from "../controllers/Users.Controller.js"; 
import RepositoriesController from "../controllers/Repositories.Controller.js";

export const usersRouter = Router()

usersRouter.get('/', UsersController.index)
usersRouter.get('/:id', UsersController.show)
usersRouter.post('/', UsersController.create)
usersRouter.put('/:id', UsersController.update)
usersRouter.delete('/:id', UsersController.remove)

usersRouter.get('/:user_id/repositories', RepositoriesController.index)
usersRouter.post('/:user_id/repositories', RepositoriesController.create);
usersRouter.delete('/:user_id/repositories/:id_repo', RepositoriesController.remove);