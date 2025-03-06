import { Router } from "express";
import PingController from '../controllers/PingController.js' 

export const router = Router()

router.get('/ping', PingController.index)