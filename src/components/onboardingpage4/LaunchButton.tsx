import React, { useState, useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

function LaunchButton() {
  const context = useContext(ProgressContext);
  const handleSubmit = () => {
    context.resetAll();
  };
  return (
    <div className="box">
      <button className="btn-primary" onClick={handleSubmit}>
        Launch Eden
      </button>
    </div>
  );
}

export default LaunchButton;
