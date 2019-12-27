import React from "react";

import "./EndGameMessage.css";

import { isDraw } from "../../utils/endLogic";
import getOppositeLetter from "../../utils/letterLogic";

const EndGameMessage = ({ board, nextLetter, playerWon }) => {
  const showWinMessage = playerWon && `${getOppositeLetter(nextLetter)} wins!`;
  const showDrawMessage = isDraw(board, playerWon) && "It's a draw!";
  const endGameMessage = showWinMessage || showDrawMessage;

  return (
    <div className="end-game-message-container">
      <p className="end-game-message">{endGameMessage}</p>
    </div>
  );
};

export default EndGameMessage;
