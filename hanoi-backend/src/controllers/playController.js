const { playHanoi } = require('../services/playService')

const play = async (req, res) => {
  try {
    const { numDisks } = req.body
    const response = await playHanoi(numDisks)

    return res.status(201).json({
      moves: response
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Server internal error' })
  }
}

module.exports = { play }