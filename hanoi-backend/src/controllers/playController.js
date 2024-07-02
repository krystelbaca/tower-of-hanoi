const { playHanoi } = require('../services/playService')

const play = async (req, res) => {
  try {
    const response = await playHanoi(disks)

    return response.status(201).json()
  } catch (error) {
    return error
  }
}

module.exports = { play }