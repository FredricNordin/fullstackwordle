import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Init from "./Init";

// Render the Init component. Letting the user choose word settings before the game is started.
ReactDOM.render(
  <div className="App">
    <Init />
  </div>,
  document.getElementById("root")
);