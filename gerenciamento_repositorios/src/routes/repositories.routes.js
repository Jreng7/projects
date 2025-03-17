import { Router } from "express"

import RepositoriesController from "../controllers/Repository.Controller.js"

router.get('/users/:user_id/repositories', RepositoriesController.index)
router.post('/users/:user_id/repositories', RepositoriesController.create);
router.delete('/users/:user_id/repositories/:id_repo', RepositoriesController.remove);