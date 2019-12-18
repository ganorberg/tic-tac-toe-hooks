import React, { useState } from 'react';

import "./index.css";

import Cell from "../Cell/index";
import isEnd from "../../endLogic";
import oppositeLetter from "../../letterLogic";

const Board = (props) => {
    const initialBoard = new Array(9).fill("-");
    /*
      Board visualized with map to initialBoard indexes:
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
    */
    const [board, setBoard] = useState(initialBoard);
    const [nextLetter, setNextLetter] = useState("X");
    const Cells = board.map((letter, index) => <Cell
        board={board}
        letter={letter}
        nextLetter={nextLetter}
        key={index}
        position={index}
        setBoard={setBoard}
        setNextLetter={setNextLetter} />
    );

    return (
        <div className="board">
            {Cells}
            {isEnd(board) && `${oppositeLetter(nextLetter)} wins!`}
        </div>
    );
}



export default Board;