import { Router } from "express";
import UsersController from "../controllers/Users.Controller.js"; 

export const router = Router()

router.get('/ping', UsersController.index)
router.post('/ping', UsersController.create)