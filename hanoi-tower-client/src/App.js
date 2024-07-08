import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { MovesProvider } from './context/MovesContext';

function App() {
  return (
    <MovesProvider>
      <MainContainer />
    </MovesProvider>
  )
}

export default App;
