import User from '../models/User.js'
import Repository from '../models/Repository.js'

class RepositoriesController {

  async index(req, res) {

    try {
      

      const users = await User.find()
      return res.json(users)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }

  }

}

export default new RepositoriesController()