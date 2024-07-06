import React from 'react';
import { getHanoiSolution } from '../api/HanoiService';

const Controls = ({ numDisks, setNumDisks, setMode, setMoves }) => {
    const handleSolve = async () => {
        try {
            setMoves([]);
            setMode('');
            const solution = await getHanoiSolution(numDisks);
            setMoves(solution);
            setMode('auto');
        } catch (error) {
            alert('Failed to get solution');
        }
    };

    const handleReset = () => {
        setMoves([]);
        setMode('');
    };

    const handlePlay = () => {
        setMoves([]);
        setMode('play');
    };

    return (
        <div className="controls">
          <div>
          <label>
            How many disks?
            <input
              type="number"
              value={numDisks}
              onChange={(e) => setNumDisks(Number(e.target.value))}
              min="1"
            />
            </label>
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
