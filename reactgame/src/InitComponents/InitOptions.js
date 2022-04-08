function InitOptions(props) {
  
  // Let the user choose what kind of word they'd like.
  return (
    <div className="Init">
      <h1>Fredde's | Wordle</h1>
      <p>Choose word length:</p>
      <select id="letters">
        <option value="4">4 letters</option>
        <option value="5">5 letters</option>
        <option value="6">6 letters</option>
      </select>
      <p>Allow words with two repeated letters like 'Hello':</p>
      <select id="dupes">
        <option value="">Yes</option>
        <option value="nodupes">No</option>
      </select>
      <br></br>
      <button className="submitBtn" onClick={props.function}>
        START GAME
      </button>
    </div>
  );
}

export default InitOptions;
