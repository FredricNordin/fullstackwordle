import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Game from "./Game";
import InitOptions from "./InitComponents/InitOptions";

function Init() {
  async function fetchWord() {
    const letters = document.getElementById("letters").value;
    const dupes = document.getElementById("dupes").value;
    const response = await fetch(
      "http://localhost:5080/api/words/" + letters + "/" + dupes
    );
    const data = await response.json();

    ReactDOM.render(
      <div className="App">
        <Game answer={data} />
      </div>,
      document.getElementById("root")
    );
  }
  return <InitOptions function={fetchWord} />;
}

export default Init;