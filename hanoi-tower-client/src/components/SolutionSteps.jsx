import React from 'react';
import { useMoves } from '../context/MovesContext';

const SolutionSteps = () => {
  const { moves } = useMoves();
  console.log('MOVES', moves)
  return (
    <div>
      <span>Solution steps:</span>
    <ol>
    {moves && moves.map((move, index) => (
      <li key={index}>{move}</li>
    ))}
  </ol>
    </div>
  );
};

export default SolutionSteps;
