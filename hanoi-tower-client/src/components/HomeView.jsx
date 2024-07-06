import React, { useState } from 'react';
import Header from './Header';
import AutoSolveHanoi from '../hooks/auto-solve/AutoSolveHanoi';
import PlayHanoi from '../hooks/playable/PlayHanoi';
import Controls from './Controls';

const Home = () => {
    const [numDisks, setNumDisks] = useState(3);
    const [mode, setMode] = useState(''); // 'auto' or 'play'
    const [moves, setMoves] = useState([]);

    return (
        <div className="home">
            <Header />
            <Controls 
                numDisks={numDisks} 
                setNumDisks={setNumDisks} 
                setMode={setMode} 
                setMoves={setMoves} 
            />
            <div className="hanoi-container">
                {mode === 'auto' && <AutoSolveHanoi numDisks={numDisks} moves={moves} />}
                {mode === 'play' && <PlayHanoi numDisks={numDisks} />}
            </div>
        </div>
    );
};

export default Home;
