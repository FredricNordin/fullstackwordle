function gameWordCheck(guess, answer) {
  let output = [];
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
  return output;
}

export default gameWordCheck;