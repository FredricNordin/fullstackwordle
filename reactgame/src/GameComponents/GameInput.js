function GameInput(props) {

  // Render the inputs available for a user.
  return (
    <div className="inputs">
      <input id="GameInput" type="text"></input>
      <button className="submitBtn" onClick={props.function}>
        Submit
      </button>
    </div>
  );
}

export default GameInput;