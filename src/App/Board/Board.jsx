import React from "react";

import "./Board.css";

import Cell from "./Cell/Cell";

const Board = ({ board, cellClickHandler }) => {
  const Cells = board.map((letter, index) => (
    <Cell
      clickHandler={cellClickHandler}
      letter={letter}
      key={index}
      position={index}
    />
  ));

  return <div className="board">{Cells}</div>;
};

export default Board;
