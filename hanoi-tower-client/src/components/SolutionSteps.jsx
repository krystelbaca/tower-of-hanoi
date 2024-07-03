import React from 'react';

const SolutionSteps = ({ moves }) => {
    return (
        <ul>
            {moves.map((move, index) => (
                <li key={index}>{move}</li>
            ))}
        </ul>
    );
};

export default SolutionSteps;
