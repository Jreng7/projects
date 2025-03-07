import { Router } from "express";
import UsersController from "../controllers/Users.Controller.js"; 

export const usersRouter = Router()

usersRouter.get('/', UsersController.index)
usersRouter.post('/', UsersController.create)