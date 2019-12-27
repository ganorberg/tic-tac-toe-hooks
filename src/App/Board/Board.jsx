import React from "react";

import "./Board.css";

import Cell from "./Cell/Cell";

const Board = ({ board }) => {
  const Cells = board.map((letter, index) => (
    <Cell letter={letter} key={index} position={index} />
  ));

  return <div className="board">{Cells}</div>;
};

export default Board;
