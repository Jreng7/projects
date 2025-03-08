import User from '../models/User.js'
import Repository from '../models/Repository.js'

class RepositoriesController {

  async index(req, res) {
    try {
      const { user_id } = req.params
      const user = await User.findById(user_id)

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
    try {
      const { user_id } = req.params
      const { name, url } = req.body

      const user = await User.findById(user_id)

      if (!user) {
        return res.status(404).json({ error: "User not found." })
      }

      const repository = await Repository.findOne({ name, userId: user_id })

      if (!repository) {
        return res.status(422).json({ message: `Repository ${name} already exists.` })
      }

      const newRepository = await Repository.create({ name, url, userId: user_id })

      return res.json(newRepository)

    } catch (error) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

}

export default new RepositoriesController()