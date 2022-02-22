import React from "react";
import logo from "../../assets/images/logo.jpeg";

const Logo = () => {
  return (
    <div className="container">
      <div className="logo">
        <img className="logoimg" src={logo} alt="Eden Logo" />
        <h2>Eden</h2>
      </div>
    </div>
  );
};

export default Logo;
