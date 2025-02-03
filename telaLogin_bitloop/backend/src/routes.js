import { Router } from 'express'

export const router = Router()

const users = [{ 

  id: 1, 
  name: 'John Doe', 
  email: 'contato@johndoe.com',
  password: '12347'

}]

router.post('/login', (req, res) => {

  const { email, password } = req.body

  const user = users.find(user => user.email === email && user.password === password)

  if( user ) {
    return res.status(200).json(user)
  }

  return res.status(401).json({ message: 'Invalid credentials'})
})  