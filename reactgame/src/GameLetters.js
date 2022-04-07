import React from "react";

function GameLetters(props) {
  return (
    <div className="letterBox">
      <p className={props.className}>{props.letter}</p>
    </div>
  )
}

export default GameLetters;