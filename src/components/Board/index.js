import React, { useState } from 'react';

import "./index.css";

import Cell from "../Cell/index";
import { isWin, isDraw } from "../../endLogic";
import getOppositeLetter from "../../letterLogic";

const Board = () => {
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

    const cellClickHandler = (cellPosition) => {
        const letterInCell = board[cellPosition];
        if (letterInCell !== "-" || playerWon) { return; }
        board[cellPosition] = nextLetter;
        setBoard(board);
        setNextLetter(getOppositeLetter(nextLetter));
        if (isWin(board)) {
            setPlayerWon(true);
        }
    }

    const reset = () => {
        setBoard(initialBoard)
        setNextLetter("X");
        setPlayerWon(false);
    }

    const Cells = board.map((letter, index) => <Cell
        clickHandler={cellClickHandler}
        letter={letter}
        key={index}
        position={index}
    />);

    return (
        <>
            <div className="board">
                {Cells}
                {playerWon && `${getOppositeLetter(nextLetter)} wins!`}
                {isDraw(board, playerWon) && "It's a draw!"}
            </div>
            <button className="reset-button" onClick={reset}>Reset Button</button>
        </>
    );
}



export default Board;