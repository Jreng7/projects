import User from '../models/User.js'
import Repository from '../models/Repository.js'

class RepositoriesController {

  async index(req, res) {
    try {
      const { user_id } = req.params
      const user = await User.findById(userId)

      if (!user) {
        return res.status(404).json({ error: "User not found." })
      }

      const repositories = await Repository.find({ userId: user_id })
      return res.json(repositories)

    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }

  }

  async create(req, res) {
    
  }

}

export default new RepositoriesController()