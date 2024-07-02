const { solveTowerOfHanoi } = require('../../Hanoi')

const playHanoi = async (disks) => {
  return solveTowerOfHanoi(disks)
}

module.exports = { playHanoi }