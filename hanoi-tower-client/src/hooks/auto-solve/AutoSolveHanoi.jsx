import React, { useEffect, useState } from 'react';
import DisplayHanoi from '../../components/DisplayHanoi';
import '../../styles/Hanoi.css';

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
        if (moves.length === 0) return;

        let isCancelled = false;

        const animateMoves = async () => {
            for (const move of moves) {
                if (isCancelled) break;

                console.log(`Processing move: ${move}`);
                const match = move.match(/from (\w) to (\w)/);
                if (match) {
                    const fromRod = match[1];
                    const toRod = match[2];
                    const from = rodMap[fromRod];
                    const to = rodMap[toRod];
                    console.log(`Moving from rod ${fromRod} (index ${from}) to rod ${toRod} (index ${to})`);

                    await new Promise((resolve) => setTimeout(resolve, 1000));

                    setRods((prevRods) => {
                        const newRods = prevRods.map(rod => [...rod]); // Create a deep copy of rods
                        console.log(`Before move:`, JSON.stringify(newRods));
                        if (newRods[from] && newRods[from].length > 0) {
                            const diskToMove = newRods[from].pop();
                            console.log(`Moving disk ${diskToMove} from rod ${fromRod} to rod ${toRod}`);
                            newRods[to].push(diskToMove);
                        }
                        console.log(`After move:`, JSON.stringify(newRods));
                        return newRods;
                    });

                    await new Promise(resolve => setTimeout(resolve, 500)); // Ensure state update is processed
                } else {
                    console.error(`Invalid move format: ${move}`);
                }
            }
        };

        animateMoves();

        return () => {
            isCancelled = true;
        };
    }, [moves]);

    return <DisplayHanoi rods={rods} />;
};

export default AutoSolveHanoi;
