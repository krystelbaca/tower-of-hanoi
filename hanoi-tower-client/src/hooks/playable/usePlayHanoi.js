import { useEffect, useState } from 'react';
const usePlayHanoi = (numDisks) => {
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

  return {
    handleDrop,
    rods,
  }
}

export default usePlayHanoi