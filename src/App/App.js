import React, { useState } from "react";

import Board from "./Board/Board";
import EndGameMessage from "./EndGameMessage/EndGameMessage";
import ResetButton from "./ResetButton/ResetButton";

import { isWin } from "../utils/endLogic";
import getOppositeLetter from "../utils/letterLogic";

const App = () => {
  const initialBoard = new Array(9).fill("-");
  /*
      Board visualized with map to initialBoard indexes:
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
    */
  const [board, setBoard] = useState(initialBoard);
  const [nextLetter, setNextLetter] = useState("X");
  const [playerWon, setPlayerWon] = useState(false);

  const cellClickHandler = cellPosition => {
    // Ignore click if cell was already selected or the game is over
    const letterInCell = board[cellPosition];
    if (letterInCell !== "-" || playerWon) {
      return;
    }

    // Update state
    board[cellPosition] = nextLetter;
    setBoard(board);
    setNextLetter(getOppositeLetter(nextLetter));
    if (isWin(board)) {
      setPlayerWon(true);
    }
  };

  const reset = () => {
    setBoard(initialBoard);
    setNextLetter("X");
    setPlayerWon(false);
  };

  return (
    <>
      <Board
        board={board}
        cellClickHandler={cellClickHandler}
        nextLetter={nextLetter}
        playerWon={playerWon}
      />
      <EndGameMessage
        board={board}
        nextLetter={nextLetter}
        playerWon={playerWon}
      />
      <ResetButton reset={reset} />
    </>
  );
};

export default App;
