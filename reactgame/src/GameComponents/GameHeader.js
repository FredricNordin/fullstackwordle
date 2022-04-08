function GameHeader(props) {
  return (
    <h1>
      Round: {props.round}/10 | Letters: {props.letters}
    </h1>
  );
}

export default GameHeader;