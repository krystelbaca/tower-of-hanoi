import React, { useEffect, useState } from 'react';
import DisplayHanoi from './DisplayHanoi';
import '../styles/Hanoi.css';

const PlayHanoi = ({ numDisks }) => {
    const [rods, setRods] = useState([[], [], []]);
    const [selectedDisk, setSelectedDisk] = useState(null);

    useEffect(() => {
        const initialRods = [[], [], []];
        for (let i = numDisks; i >= 1; i--) {
            initialRods[0].push(i);
        }
        setRods(initialRods);
    }, [numDisks]);

    const handleDiskClick = (rodIndex) => {
        if (selectedDisk) {
            const newRods = [...rods];
            if (newRods[selectedDisk.rod] && newRods[selectedDisk.rod].length > 0) {
                if (newRods[rodIndex]) {
                    newRods[rodIndex].push(selectedDisk.disk);
                    newRods[selectedDisk.rod].pop();
                    setSelectedDisk(null);
                    setRods(newRods);
                } else {
                    console.error(`Target rod ${rodIndex} is undefined`);
                }
            } else {
                console.error(`Source rod ${selectedDisk.rod} is undefined or empty`);
            }
        } else {
            if (rods[rodIndex] && rods[rodIndex].length > 0) {
                setSelectedDisk({ disk: rods[rodIndex].slice(-1)[0], rod: rodIndex });
            }
        }
    };

    return <DisplayHanoi rods={rods} onClick={handleDiskClick} />;
};

export default PlayHanoi;
