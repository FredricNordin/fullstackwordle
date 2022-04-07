import './App.css';
import React from 'react';
import UserLetter from './UserLetter';
let output = [];
let answer = "garden".toUpperCase();


function App() {
  const [round, setRound] = React.useState(1);
  const [timer, setTimer] = React.useState(60);

  // Substract 1 from timer every second.
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // When the timer reaches 0 or over limit of rounds, the game is over.
  if (timer < 0 || round > 5) {
    return (
      <div className="App">
        <h1>Game Over</h1>
        <h2>The answer was: {answer}</h2>
        <button className="submitBtn" onClick={resetGame}>Play again?</button>
      </div>
    );
  }

  // Resets the game.
  function resetGame() {
    window.location.reload();
  };

  // Game runtime.
  function submitFunc() {
    if (document.getElementById("userInput").value.length === answer.length) {
      output = [];
      setRound(round + 1);

      const guess = document.getElementById("userInput").value.toUpperCase();
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
      alert("Please enter a word of length " + answer.length);
    }
  }

  // If output has same length as the answer, and all letters are "correct", the game is won.
  if (output.length === answer.length && output.every(x => x.result === "correct")) {
    return (
      <div className="App">
        <h1>You win!</h1>
        <h2>The answer was: {answer}</h2>
        <button className="submitBtn" onClick={resetGame}>Play again?</button>
      </div>
    );
  }

  // Render the amount of letterboxes as amount of letters in the answer on the first round.
  if (round < 2) {
    return (
      <div className="App">
        <h1>Round: {round}/5 | Timer: {timer}s</h1>
        <div className="boxes">

          {/* Render the amount of letterboxes for each letter in answer. */}
          {answer.split("").map((letter, index) => (
            <div key={index} className="letterBox"></div>))}
        </div>
        <input id="userInput" type="text" />
        <button className="submitBtn" onClick={submitFunc}>Submit</button>
      </div>
    );

  } else {
    // Render the amount of letterboxes from the user's input.
    return (
      <div className="App">
        <h1>Round: {round}/5 | Timer: {timer}s</h1>
        <div className="boxes">

          {/* Render the amount of UserLetter components for every letter. */}
          {output.map((item, index) => (
            <UserLetter key={index} className={item.result} letter={item.letter} />
          ))}
        </div>
        <input id="userInput" type="text"></input>
        <button className="submitBtn" onClick={submitFunc}>Submit</button>
      </div>
    )
  }
}

export default App;