import React, { useState } from 'react';
import { getHanoiSolution } from './api/HanoiService';
// import HanoiVisualizer from './components/HanoiVisualizer';

function App() {
    const [numDisks, setNumDisks] = useState(3);
    const [moves, setMoves] = useState([]);

    const handleSolve = async () => {
        try {
            const solution = await getHanoiSolution(numDisks);
            setMoves(solution);
        } catch (error) {
            alert('Failed to get solution');
        }
    };

    return (
        <div>
            <h1>Tower of Hanoi Solver</h1>
            <input
                type="number"
                value={numDisks}
                onChange={(e) => setNumDisks(Number(e.target.value))}
                min="1"
            />
            <button onClick={handleSolve}>Solve</button>
            {/* <HanoiVisualizer numDisks={numDisks} moves={moves} /> */}
            <ul>
                {moves.map((move, index) => (
                    <li key={index}>{move}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
