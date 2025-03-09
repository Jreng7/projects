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

      const userExists = await User.exists({ _id: user_id })

      if (!userExists) {
        return res.status(404).json({ error: "User not found." })
      }

      const repository = await Repository.findOne({ name, userId: user_id })

      if (repository) {
        return res.status(422).json({ message: `Repository ${name} already exists.` })
      }

      const newRepository = await Repository.create({ name, url, userId: user_id })

      return res.status(201).json(newRepository)

    } catch (error) {
      console.error(err)
      return res.status(500).json({ error: 'Internal server error.' })
    }
  }

  async remove(req, res) {
    try {
      const { user_id, id_repo } = req.params

      const userExists = await User.exists({ _id: user_id })
      if (!userExists) {
        return res.status(404).json({ message: "User not found" })
      }

      const repository = await Repository.findOne({userId: user_id, _id: id_repo })

      if (!repository) {
        return res.status(404).json({ message: "Repository not found" })
      }

      await repository.deleteOne()
      return res.status(204).end()

    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: "Internal server error." })
    }
  }

}

export default new RepositoriesController()