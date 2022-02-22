import React from "react";
import checkicon from "../../assets/images/checkicon.png";

function CheckIcon() {
  return (
    <div className="box">
      <div className="checkicon-group">
        <img src={checkicon} alt="Check Icon" />
      </div>
    </div>
  );
}

export default CheckIcon;
