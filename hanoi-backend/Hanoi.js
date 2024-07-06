function towerOfHanoi(n, source, auxiliary, destination, moves) {
  if (n === 1) {
    moves.push(`Move disk ${n} from ${source} to ${destination}`)
    return
  }

  towerOfHanoi(n - 1, source, destination, auxiliary, moves)
  moves.push(`Move disk ${n} from ${source} to ${destination}`)

  towerOfHanoi(n - 1, auxiliary, source, destination, moves)
}

function solveTowerOfHanoi(numDisks) {
  const moves = []

  towerOfHanoi(numDisks, 'A', 'B', 'C', moves)

  return {
    minMoves: moves.length,
    moves
  }
}

module.exports = {
  solveTowerOfHanoi
}