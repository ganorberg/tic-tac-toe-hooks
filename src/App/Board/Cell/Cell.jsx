import React, { useContext } from "react";

import "./Cell.css";

import CellClickHandlerContext from "../../CellClickHandlerContext";

const Cell = ({ letter, position }) => {
  const clickHandler = useContext(CellClickHandlerContext);
  return (
    <div className="cell" onClick={() => clickHandler(position)}>
      <p>{letter}</p>
    </div>
  );
};

export default Cell;
