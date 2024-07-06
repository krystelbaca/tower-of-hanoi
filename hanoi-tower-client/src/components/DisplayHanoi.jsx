import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Hanoi.css';

const colors = [
    '#f39c12', '#e74c3c', '#8e44ad', '#3498db', 
    '#1abc9c', '#2ecc71', '#e67e22', '#d35400'
];

const getColor = (index) => colors[index % colors.length];

const DisplayHanoi = ({ rods = [[], [], []], onDrop, isPlayable }) => {
    const handleDragStart = (event, disk, rodIndex) => {
        event.dataTransfer.setData('disk', disk);
        event.dataTransfer.setData('sourceRod', rodIndex);
    };

    const handleDragOver = (event) => {
        if (isPlayable) {
            event.preventDefault();
        }
    };

    const handleDrop = (event, targetRodIndex) => {
        if (isPlayable) {
            const disk = event.dataTransfer.getData('disk');
            const sourceRodIndex = event.dataTransfer.getData('sourceRod');
            if (sourceRodIndex !== targetRodIndex.toString()) {
                onDrop(parseInt(sourceRodIndex), targetRodIndex);
            }
        }
    };

    return (
        <div className="hanoi-visualizer">
            {rods.map((rod, rodIndex) => (
                <div
                    key={rodIndex}
                    className="rod"
                    onDragOver={handleDragOver}
                    onDrop={(event) => handleDrop(event, rodIndex)}
                >
                    <AnimatePresence>
                        {rod.map((disk) => (
                            <motion.div
                                key={disk}
                                className="disk"
                                style={{ width: `${disk * 20}px`, backgroundColor: getColor(disk - 1) }}
                                draggable={isPlayable}
                                onDragStart={isPlayable ? (event) => handleDragStart(event, disk, rodIndex) : null}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                {disk}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default DisplayHanoi;
