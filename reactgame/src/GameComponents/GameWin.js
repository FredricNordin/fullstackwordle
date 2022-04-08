import React from "react";

function GameWin(props) {
  const startTime = props.time;
  const endTime = Math.floor(Date.now() / 1000);
  const newTime = endTime - startTime;
  const guesses = props.guesses;
  const answer = props.answer;
  const answerLength = answer.length;
  const dupes = props.dupes;

  function postHighscore() {
    const getName = document.getElementById("userName").value;
    if (getName.length > 0) {
      fetch("http://localhost:5080/api/highscore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: getName,
          time: newTime,
          length: answerLength,
          dupes: dupes,
          guesses: guesses,
        }),
      }).then((response) => response.json(), window.location.reload());
    }
  }
  return (
    <>
      <h1>🥳👍 You win! ✌️🥳</h1>
      <h2>The answer was: {answer}</h2>
      <h3>You guessed it in: {newTime}s!</h3>
      <h4>Below is what you've guessed.</h4>
      <h5>{guesses}</h5>
      <input id="userName" type="text" placeholder="What is your name?" />
      <br></br>
      <br></br>
      <button className="submitBtn" onClick={postHighscore}>
        Add to Highscores 🏆
      </button>
      <p>or</p>
      <button className="submitBtn" onClick={props.function}>
        Play again?
      </button>
    </>
  );
}
export default GameWin;