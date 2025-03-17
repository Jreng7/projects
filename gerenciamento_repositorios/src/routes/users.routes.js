import { Router } from "express"
import UsersController from "../controllers/User.Controller.js"

export const usersRouter = Router()

usersRouter.get('/', UsersController.index)
usersRouter.get('/:id', UsersController.show)
usersRouter.post('/', UsersController.create)
usersRouter.put('/:id', UsersController.update)
usersRouter.delete('/:id', UsersController.remove)

