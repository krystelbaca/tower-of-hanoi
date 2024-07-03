import React, { useState } from 'react';
import { getHanoiSolution } from './api/HanoiService';
import AutoSolveHanoi from './components/AutoSolveHanoi';
import PlayHanoi from './components/PlayHanoi';
import SolutionSteps from './components/SolutionSteps';
import './App.css';

function App() {
    const [numDisks, setNumDisks] = useState(3);
    const [moves, setMoves] = useState([]);
    const [mode, setMode] = useState(''); // 'auto' or 'play'

    const handleInputChange = (e) => {
        setNumDisks(Number(e.target.value));
    };

    const handleSolve = async () => {
        try {
            const solution = await getHanoiSolution(numDisks);
            setMoves(solution);
            setMode('auto');
        } catch (error) {
            alert('Failed to get solution');
        }
    };

    const handlePlay = () => {
        setMode('play');
    };

    const handleReset = () => {
        setMoves([]);
        setMode('');
    };

    return (
        <div className="app">
            <h1>Tower of Hanoi Solver</h1>
            <input
                type="number"
                value={numDisks}
                onChange={handleInputChange}
                min="1"
            />
            <button onClick={handleSolve}>Get Solution</button>
            <button onClick={handlePlay} disabled={!moves.length}>Play</button>
            <button onClick={handleReset}>Reset</button>
            <div className="hanoi-container">
                {mode === 'auto' && <AutoSolveHanoi numDisks={numDisks} moves={moves} />}
                {mode === 'play' && <PlayHanoi numDisks={numDisks} />}
            </div>
            <SolutionSteps moves={moves} />
        </div>
    );
}

export default App;
