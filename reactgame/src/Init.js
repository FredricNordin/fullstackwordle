import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Game from "./Game";
import InitOptions from "./InitComponents/InitOptions";

function Init() {

  // Fetch a random word from the API. 'dupes' means duplicate(s) letters.
  async function fetchWord() {
    const letters = document.getElementById("letters").value;
    const dupes = document.getElementById("dupes").value;
    const response = await fetch(
      "http://localhost:5080/api/words/" + letters + "/" + dupes
    );
    const data = await response.json();
    const time = Math.floor(Date.now() / 1000);

    ReactDOM.render(
      <div className="App">
        <Game answer={data} time={time} dupes={dupes} />
      </div>,
      document.getElementById("root")
    );
  }

  // Render the options/settings available for the word game.
  return <InitOptions function={fetchWord} />;
}

export default Init;