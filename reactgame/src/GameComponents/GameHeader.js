function GameHeader(props) {
  return (
    <h1>
      Round: {props.round}/5 | Timer: {props.timer}
    </h1>
  );
}

export default GameHeader;