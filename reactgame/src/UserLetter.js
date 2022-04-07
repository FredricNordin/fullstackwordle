import React from "react";

function UserLetter(props) {
  return (
    <div className="letterBox">
      <p className={props.className}>{props.letter}</p>
    </div>
  )
}

export default UserLetter;