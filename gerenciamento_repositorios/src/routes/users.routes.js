import { Router } from "express"
import UsersController from "../controllers/User.Controller.js"


export const router = Router()

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.create)
router.put('/users/:id', UsersController.update)
router.delete('/users/:id', UsersController.remove)

