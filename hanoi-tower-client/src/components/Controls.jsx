import React, { useState } from 'react';
import { getHanoiSolution } from '../api/HanoiService';
import '../styles/Controls.css'; 

const Controls = ({ numDisks, setNumDisks, setMode, setMoves }) => {
  const [minMoves, setMinMoves] = useState(null);

    const handleSolve = async () => {
        try {
            setMoves([]);
            setMode('');
            const solution = await getHanoiSolution(numDisks);
            const { minMoves, moves } = solution
            setMinMoves(minMoves)
            setMoves(moves);
            setMode('auto');
        } catch (error) {
            alert('Failed to get solution');
        }
    };

    const handleReset = () => {
        setMoves([]);
        setMode('');
        setMinMoves(null)
        setNumDisks(prev => prev);
    };

    const handlePlay = () => {
        setMoves([]);
        setMode('play');
    };

    const handleInputChange = (e) => {
      setNumDisks(Number(e.target.value));
      setMinMoves(null);
    }

    return (
      <div className="controls">
        <div>
          <label>
              How many disks?
            <input
              type="number"
              value={numDisks}
              onChange={handleInputChange}
              min="3"
              max="20"
            />
          </label>
          {minMoves !== null && (
            <span>
                Minimum moves: {minMoves}
            </span>
          )}
          </div>
        <div className='buttons'>
          <button onClick={handleSolve}>Auto Solve</button>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
};

export default Controls;
