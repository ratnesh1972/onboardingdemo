import React, { useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

const ProgressCounter = () => {
  const context = useContext(ProgressContext);

  return (
    <div className="container">
      <div className="progress-counter-box">
        <div className="counter-box">
          <span className="counter-active right-active">1</span>
        </div>
        <div className="counter-box">
          <span
            className={
              context?.state.currentPage >= 2
                ? "counter-active right-active left-active"
                : "counter right left"
            }
          >
            2
          </span>
        </div>
        <div className="counter-box">
          <span
            className={
              context?.state.currentPage >= 3
                ? "counter-active right-active left-active"
                : "counter right left"
            }
          >
            3
          </span>
        </div>
        <div className="counter-box">
          <span
            className={
              context?.state.currentPage === 4
                ? "counter-active left-active"
                : "counter left"
            }
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCounter;
