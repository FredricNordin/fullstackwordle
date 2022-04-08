function GameOver(props) {
  return (
    <>
      <h1>Game Over 😢</h1>
      <h2>The answer was: {props.answer}</h2>
      <h4>Below is what you've guessed.</h4>
      <h5>{props.guesses}</h5>
      <button className="submitBtn" onClick={props.function}>
        Play again?
      </button>
    </>
  );
}

export default GameOver;