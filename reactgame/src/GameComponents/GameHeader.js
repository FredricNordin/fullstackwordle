function GameHeader(props) {

  // Renders the Game Header component.
  return (
    <h1>
      Round: {props.round}/10 | Letters: {props.letters}
    </h1>
  );
}

export default GameHeader;