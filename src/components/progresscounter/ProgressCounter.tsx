import React from "react";

const ProgressCounter = () => {
  return (
    <div className="container">
      <div className="progress-counter-box">
        <div className="counter-box">
          <span className="counter-active right">1</span>
        </div>
        <div className="counter-box">
          <span className="counter right left">2</span>
        </div>
        <div className="counter-box">
          <span className="counter right left">3</span>
        </div>
        <div className="counter-box">
          <span className="counter left">4</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCounter;
