import React from "react";

import "./ResetButton.css";

const ResetButton = ({ reset }) => (
  <div className="button-container">
    <button className="reset-button" onClick={reset}>
      Reset Button
    </button>
  </div>
);

export default ResetButton;
