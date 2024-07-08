import React, { useState } from "react";
import { getHanoiSolution } from "../api/HanoiService";
import "../styles/Controls.css";
import { useMoves } from "../context/MovesContext";

const Controls = ({ numDisks, setNumDisks, setMode }) => {
  const { setMoves, setShowMoves } = useMoves();
  const [minMoves, setMinMoves] = useState(null);

  const getSolution = async () => {
    return getHanoiSolution(numDisks);
  }
  
  const handleSolve = async () => {
    try {
      const { minMoves, moves} = await getSolution(numDisks)
      setMoves([]);
      setMode("");
      setMinMoves(minMoves);
      setMoves(moves);
      setMode("auto");
    } catch (error) {
      alert("Failed to get solution");
    }
  };

  const handleReset = () => {
    setMoves([]);
    setMode("");
    setNumDisks((prev) => prev);
  };

  const handlePlay = async () => {
    setMoves([]);
    setMode("play");
    const { moves} = await getSolution(numDisks)
    setMoves(moves);
    setShowMoves(true);
  };

  const handleInputChange = (e) => {
    setNumDisks(Number(e.target.value));
    setMinMoves(null);
  };

  return (
    <div>
      <div className="controls">
        <div>
          <label>How many disks?</label>
          <input
            type="number"
            value={numDisks}
            onChange={handleInputChange}
            min="3"
            max="50"
          />
          
        </div>
        <div className="buttons">
          <button onClick={handleSolve}>Auto Solve</button>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      {minMoves !== null && <span>Minimum moves: {minMoves}</span>}
    </div>
  );
};

export default Controls;
