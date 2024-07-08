import React, { createContext, useContext, useState } from "react";

const MovesContext = createContext();

export const MovesProvider = ({ children }) => {
  const [moves, setMoves] = useState([]);
  const [showMoves, setShowMoves] = useState(false);

  return (
    <MovesContext.Provider
      value={{
        moves,
        setMoves,
        showMoves,
        setShowMoves,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
};
export const useMoves = () => {
  return useContext(MovesContext);
};
