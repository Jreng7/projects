import { Router } from "express";

import UsersController from "../controllers/Users.Controller.js"; 
import RepositoriesController from "../controllers/Repositories.Controller.js";

export const router = Router()

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.create)
router.put('/users/:id', UsersController.update)
router.delete('/users/:id', UsersController.remove)

router.get('/users/:user_id/repositories', RepositoriesController.index)
router.post('/users/:user_id/repositories', RepositoriesController.create);
router.delete('/users/:user_id/repositories/:id_repo', RepositoriesController.remove);