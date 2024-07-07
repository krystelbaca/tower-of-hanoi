import React, { useEffect, useState } from 'react';
import DisplayHanoi from '../../components/DisplayHanoi';
import '../../styles/Hanoi.css';

const AutoSolveHanoi = ({ numDisks, moves }) => {
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
      console.log('MOVE', move)
      console.log('CURRENT MOVE', currentMove)
      const match = move.match(/Move disk (\d+) from (\w) to (\w)/);

      if (match) {
        const [, diskNum, fromRod, toRod] = match;
        const sourceIndex = rodMap[fromRod];
        const destinationIndex = rodMap[toRod];
        const disk = parseInt(diskNum);

        setTimeout(() => {
          setRods((prevRods) => {
            const newRods = prevRods.map((rod) => [...rod]);

            const diskIndex = newRods[sourceIndex].findIndex(
              d => d === disk
            )
            if (diskIndex !== -1) {
              console.log('DISK INDEX: ', diskIndex)
              newRods[sourceIndex].splice(diskIndex, 1);
              newRods[destinationIndex].push(parseInt(diskNum));
            } else {
              console.error(`Disk ${disk} not found on rod ${fromRod}`);
            }
  
            console.log('Updated Rods: ', newRods);
            return newRods
          })
          setCurrentMove(prevCurrentMove => prevCurrentMove + 1);
        }, 1000)
      }
    }, [currentMove, moves]);

    return <DisplayHanoi rods={rods} onDrop={() => {}} isPlayable={false} />;
  };
  

export default AutoSolveHanoi;
