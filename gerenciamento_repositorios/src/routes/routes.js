import { Router } from "express";
import PingController from '../controllers/PingController.js' 

const router = Router()

router.get('/ping', PingController.index)

export default router