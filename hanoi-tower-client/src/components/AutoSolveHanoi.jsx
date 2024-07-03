import React, { useEffect, useState } from 'react';
import DisplayHanoi from './DisplayHanoi';
import '../styles/Hanoi.css';

const rodMap = {
    A: 0,
    B: 1,
    C: 2,
};

const AutoSolveHanoi = ({ numDisks, moves }) => {
    const [rods, setRods] = useState([[], [], []]);

    useEffect(() => {
        const initialRods = [[], [], []];
        for (let i = numDisks; i >= 1; i--) {
            initialRods[0].push(i);
        }
        setRods(initialRods);
    }, [numDisks]);

    useEffect(() => {
        const animateMoves = async () => {
            for (const move of moves) {
                console.log(`Processing move: ${move}`);
                const match = move.match(/(A|B|C) to (A|B|C)/);
                if (match) {
                    const from = rodMap[match[1]];
                    const to = rodMap[match[2]];
                    console.log(`Moving from rod ${from} to rod ${to}`);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    setRods((prevRods) => {
                        const newRods = prevRods.map(rod => [...rod]); // Create a deep copy of rods
                        if (newRods[from] && newRods[from].length > 0) {
                            const diskToMove = newRods[from].pop();
                            if (newRods[to]) {
                                newRods[to].push(diskToMove);
                            } else {
                                console.error(`Target rod ${to} is undefined`);
                            }
                        } else {
                            console.error(`Source rod ${from} is undefined or empty`);
                        }
                        return newRods;
                    });
                } else {
                    console.error(`Invalid move format: ${move}`);
                }
            }
        };

        if (moves.length) {
            animateMoves();
        }
    }, [moves]);

    return <DisplayHanoi rods={rods} />;
};

export default AutoSolveHanoi;
