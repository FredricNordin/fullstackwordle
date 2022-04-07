import "./App.css";
import React from "react";
import UserLetter from "./UserLetter";
import GameHeader from "./GameHeader";
import GameWin from "./GameWin";
import GameOver from "./GameOver";
import GameInput from "./GameInput";
let output = [];


function App(props) {
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

  // Resets the game.
  function resetGame() {
    window.location.reload();
  }

  // Game runtime.
  function submitFunc() {
    if (document.getElementById("GameInput").value.length === answer.length) {
      output = [];
      setRound(round + 1);

      const guess = document.getElementById("GameInput").value.toUpperCase();
      const correctCheck = {};

      // Check which letters are correct.
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
          correctCheck[guess[i]] = "correct";
        }
      }
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
          output.push({ letter: guess[i], result: "correct" });
        } else if (
          correctCheck[guess[i]] !== "correct" &&
          answer.includes(guess[i])
        ) {
          output.push({ letter: guess[i], result: "misplaced" });
        } else {
          output.push({ letter: guess[i], result: "incorrect" });
        }
      }
    } else {
      return;
    }
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
          <UserLetter key={index} className={item.result} letter={item.letter} />
        ))}
        <GameInput function={submitFunc} />
      </>
    );
  }
}

export default App;
