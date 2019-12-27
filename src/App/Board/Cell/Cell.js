import React from 'react';

import "./Cell.css";

const Cell = ({ clickHandler, letter, position }) => {
    return <div className="cell" onClick={() => clickHandler(position)}><p>{letter}</p></div>
}

export default Cell;