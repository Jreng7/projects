class PingController {
  
  async index(req, res) {
    return res.json({ ping: 'pong 2.0'})
  }
}

export default new PingController();