import React from 'react';
import './App.css';

import Board from "./components/Board/index";
import ResetButton from "./components/ResetButton/index";

function App() {
  return (
    <div className="App">
      <Board />
      <ResetButton />
    </div>
  );
}

export default App;

/*
tic tac toe

App
  Board
    Row
      Cell
        - or Letter
  ResetButton
  EndDisplay

rules:
  - click reset button to empty cells
    - owned by ResetButton
  - click cell to add letter
    - owned by Board
  - letters alternate between X and O
    - owned by App
  - end conditions: win if three letters line up horizontally, vertically, or diagonally. Tie if all cells filled without win.
    - owned by App
  - once end condition is met, cannot change values in any cells until reset
*/