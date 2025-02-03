import { Router } from 'express'

export const router = Router()

router.post('/login', (req, res) => {
  return res.send('Login endpoint')
})  