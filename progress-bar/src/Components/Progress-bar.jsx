import React from "react";
import '../../src/Components/progress-bar.css';

function ProgressBar(props) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${props.width}%` }}
      ></div>
    </div>
  );
}  

export default ProgressBar;
