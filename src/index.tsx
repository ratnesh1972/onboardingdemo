import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/custom.scss";
import ProgessProvider from "./context/ProgressProvider";

ReactDOM.render(
  <React.StrictMode>
    <ProgessProvider>
      <App />
    </ProgessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
