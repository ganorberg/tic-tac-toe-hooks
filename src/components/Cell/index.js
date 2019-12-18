import React from 'react';

import "./index.css";

import getOppositeLetter from "../../letterLogic";

const Cell = ({ board, letter, nextLetter, position, setBoard, setNextLetter }) => {
    const clickHandler = () => {
        if (letter !== "-") { return; }
        board[position] = nextLetter;
        setBoard(board);
        const nextLetterToSet = getOppositeLetter(nextLetter);
        setNextLetter(nextLetterToSet);
    }

    return <div className="cell" onClick={clickHandler}><p>{letter}</p></div>
}

export default Cell;