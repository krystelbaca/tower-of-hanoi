const { solveTowerOfHanoi } = require('../../Hanoi')

const playHanoi = async (disks) => {
  try {
    return solveTowerOfHanoi(disks)
  } catch (error) {
    throw new Error('Error solving Tower of Hanoi');
  }
}

module.exports = { playHanoi }