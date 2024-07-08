import React, { useEffect, useState } from 'react';
import DisplayHanoi from '../../components/DisplayHanoi';
import '../../styles/Hanoi.css';
import { useMoves } from '../../context/MovesContext';

const AutoSolveHanoi = ({ numDisks }) => {
    const { moves } = useMoves();
    const [rods, setRods] = useState([[], [], []]);
    const [currentMove, setCurrentMove] = useState(0);

    useEffect(() => {
      if (!numDisks) return

      const initialRods = Array.from({ length: numDisks }, (_, index) => numDisks - index)

      setRods([initialRods, [], []]);
      setCurrentMove(0);
    }, [numDisks])

    useEffect(() => {
      if (currentMove >= moves.length) return 

      const rodMap = { A: 0, B: 1, C: 2 };

      const move = moves[currentMove]

      const match = move.match(/Move disk (\d+) from (\w) to (\w)/);

      if (match) {
        const [, diskNum, fromRod, toRod] = match;
        const sourceIndex = rodMap[fromRod];
        const destinationIndex = rodMap[toRod];
        const disk = parseInt(diskNum);

        const intervalId = setInterval(() => {
          setRods((prevRods) => {
            const newRods = prevRods.map((rod) => [...rod]);

            const diskIndex = newRods[sourceIndex].findIndex(
              d => d === disk
            )
            if (diskIndex !== -1) { 
              newRods[sourceIndex].splice(diskIndex, 1);
              newRods[destinationIndex].push(parseInt(diskNum));
            } else {
              console.error(`Disk ${disk} not found on rod ${fromRod}`);
            }
            return newRods
          })
          setCurrentMove(prevCurrentMove => prevCurrentMove + 1);
        }, 2000)

        return () => clearInterval(intervalId)
      }
    }, [currentMove, moves]);

    return <DisplayHanoi rods={rods} onDrop={() => {}} isPlayable={false} />;
  };
  

export default AutoSolveHanoi;
