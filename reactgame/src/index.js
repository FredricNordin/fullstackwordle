import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import InitHeader from "./InitComponents/InitHeader";
import Init from "./Init";

// Render the Init component. Letting the user choose word settings before the game is started.
ReactDOM.render(
  <div className="App">
    <InitHeader />
    <Init />
  </div>,
  document.getElementById("root")
);