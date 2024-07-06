import React, { useEffect, useState } from 'react';
import DisplayHanoi from '../../components/DisplayHanoi';
import '../../styles/Hanoi.css';

const PlayHanoi = ({ numDisks }) => {
  const [rods, setRods] = useState([[], [], []]);

  useEffect(() => {
    const initialRods = [[], [], []];
    for (let i = numDisks; i >= 1; i--) {
        initialRods[0].push(i);
    }
    setRods(initialRods);
  }, [numDisks]);

  const handleDrop = (sourceRodIndex, targetRodIndex) => {
    const newRods = [...rods];
    const disk = newRods[sourceRodIndex].pop();
    newRods[targetRodIndex].push(disk);
    setRods(newRods);
  };

  return <DisplayHanoi rods={rods} onDrop={handleDrop} isPlayable />;
};

export default PlayHanoi;
