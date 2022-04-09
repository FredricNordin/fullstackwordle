import "./css/Game.css";
import React from "react";
import GameLetters from "./GameComponents/GameLetters";
import GameHeader from "./GameComponents/GameHeader";
import GameWin from "./GameComponents/GameWin";
import GameOver from "./GameComponents/GameOver";
import GameInput from "./GameComponents/GameInput";
import gameWordCheck from "./GameComponents/gameWordCheck";
let output = [];
let guesses = [];

function Game(props) {
  const [round, setRound] = React.useState(1);
  const answer = props.answer.toUpperCase();
  const time = props.time;
  const dupes = props.dupes;

  // Win and lose conditions.
  if (
    output.length === answer.length &&
    output.every((x) => x.result === "correct")
  ) {
    return (
      <GameWin
        answer={answer}
        function={resetGame}
        time={time}
        guesses={guesses}
        dupes={dupes}
      />
    );
  } else if (round >= 11) {
    return (
      <GameOver
        answer={answer}
        function={resetGame}
        time={time}
        guesses={guesses}
      />
    );
  }

  // The first round displays empty 'letterboxes' showing the length of the hidden answer.
  if (round <= 1) {
    return (
      <>
        <GameHeader round={round} letters={answer.length} />
        {answer.split("").map((letter, index) => (
          <div key={index} className="letterBox"></div>
        ))}
        <GameInput function={submitFunc} />
      </>
    );

    // The other rounds display the letters guessed and the result of the guess.
  } else {
    return (
      <>
        <GameHeader round={round} letters={answer.length} />
        {output.map((item, index) => (
          <GameLetters
            key={index}
            className={item.result}
            letter={item.letter}
          />
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
      guesses.push(guess + ", ");
    } else {
      alert("That's not a " + answer.length + " letter word!")
    }
  }
}
export default Game;
