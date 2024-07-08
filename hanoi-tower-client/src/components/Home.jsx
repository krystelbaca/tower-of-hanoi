import React, { useState } from "react";
import AutoSolveHanoi from "../hooks/auto-solve/AutoSolveHanoi";
import PlayHanoi from "./PlayHanoi";
import Controls from "./Controls";

const Home = () => {
  const [numDisks, setNumDisks] = useState(3);
  const [mode, setMode] = useState(""); 

  return (
    <div className="home">
      <Controls
        numDisks={numDisks}
        setNumDisks={setNumDisks}
        setMode={setMode}

      />
      <div className="hanoi-container">
        {mode === "auto" && (
          <AutoSolveHanoi numDisks={numDisks} />
        )}
        {mode === "play" && <PlayHanoi numDisks={numDisks} />}
      </div>
    </div>
  );
};

export default Home;
