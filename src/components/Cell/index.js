import React from 'react';

import "./index.css";


const Cell = ({ clickHandler, letter, position }) => {
    return <div className="cell" onClick={() => clickHandler(position)}><p>{letter}</p></div>
}

export default Cell;