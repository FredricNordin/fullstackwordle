import "./Game.css";
import React from "react";
import GameLetters from "./GameLetters";
import GameHeader from "./GameHeader";
import GameWin from "./GameWin";
import GameOver from "./GameOver";
import GameInput from "./GameInput";
import gameWordCheck from "./gameWordCheck";
let output = [];

function Game(props) {
  const [round, setRound] = React.useState(1);
  const [timer, setTimer] = React.useState(60);
  const answer = props.answer.toUpperCase();

  // Substract 1 from timer every second.
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Loose and win conditions.
  if (timer < 0) {
    return (
      <GameOver answer={answer} function={resetGame} />
    );
  } else if (output.length === answer.length && output.every((x) => x.result === "correct")) {
    return (
      <GameWin answer={answer} function={resetGame} />
    );
  } else if (round > 5) {
    return (
      <GameOver answer={answer} function={resetGame} />
    )
  }
  if (round <= 1) {
    return (
      <>
        <GameHeader round={round} timer={timer} />
        {answer.split("").map((letter, index) => (
          <div key={index} className="letterBox"></div>
        ))}
        <GameInput function={submitFunc} />
      </>
    );
  } else {
    return (
      <>
        <GameHeader round={round} timer={timer} />
        {output.map((item, index) => (
          <GameLetters key={index} className={item.result} letter={item.letter} />
        ))}
        <GameInput function={submitFunc} />
      </>
    );
  }

  // Resets the game.
  function resetGame() {
    window.location.reload();
  }

  // When user submits a word.
  function submitFunc() {
    if (document.getElementById("GameInput").value.length === answer.length) {
      setRound(round + 1);
      const guess = document.getElementById("GameInput").value.toUpperCase();
      output = gameWordCheck(guess, answer);
    }
  }
}
export default Game;