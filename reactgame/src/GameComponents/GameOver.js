function GameOver(props) {
  return (
    <>
      <h1>Game Over</h1>
      <h2>The answer was: {props.answer}</h2>
      <button className="submitBtn" onClick={props.function}>
        Play again?
      </button>
    </>
  );
}

export default GameOver;