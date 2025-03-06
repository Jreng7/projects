class PingController {
  async index(req, res) {
    return res.json({ ping: 'pong'})
  }
}

export default new PingController()