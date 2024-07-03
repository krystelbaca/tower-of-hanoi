import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Hanoi.css';

const DisplayHanoi = ({ rods = [[], [], []], onClick }) => {
    return (
        <div className="hanoi-visualizer">
            {rods.map((rod, rodIndex) => (
                <div key={rodIndex} className="rod" onClick={() => onClick && onClick(rodIndex)}>
                    <AnimatePresence>
                        {rod.map((disk) => (
                            <motion.div
                                key={disk}
                                className="disk"
                                style={{ width: `${disk * 20}px` }}
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
