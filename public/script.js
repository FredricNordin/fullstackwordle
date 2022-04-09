// If window location is /highscore, fetch highscore data from API and display it.
if (window.location.pathname === "/highscore") {
  fetch("http://localhost:5080/api/highscore")
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector(".content");
      content.innerHTML = "";
      data.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
        content.appendChild(li);
      });
    });
}

// When user clicks on 'filterLetterBtn' fetch highscore data from API and display lowest number of score.length at the top.
document.querySelector("#filterLetterBtn").addEventListener("click", () => {
  fetch("http://localhost:5080/api/highscore")
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector(".content");
      content.innerHTML = "";
      data.sort((a, b) => a.length - b.length);
      data.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
        content.appendChild(li);
      });
    });
});

// When user clicks on 'filterTimeBtn' fetch highscore data from API and display lowest number of score.time at the top.
document.querySelector("#filterTimeBtn").addEventListener("click", () => {
  fetch("http://localhost:5080/api/highscore")
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector(".content");
      content.innerHTML = "";
      data.sort((a, b) => a.time - b.time);
      data.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
        content.appendChild(li);
      });
    });
});

// When user clicks on 'filterDupesBtn' fetch highscore data from API and display allowed -> denied of score.dupes at the top.
document.querySelector("#filterDupesBtn").addEventListener("click", () => {
  fetch("http://localhost:5080/api/highscore")
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector(".content");
      content.innerHTML = "";
      data.sort((a, b) => a.dupes - b.dupes);
      data.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
        content.appendChild(li);
      });
    });
});

// When user clicks on 'filterTriesBtn' fetch highscore data from API and display lowest number of score.guesses.length at the top.
document.querySelector("#filterTriesBtn").addEventListener("click", () => {
  fetch("http://localhost:5080/api/highscore")
    .then((response) => response.json())
    .then((data) => {
      const content = document.querySelector(".content");
      content.innerHTML = "";
      data.sort((a, b) => a.guesses.length - b.guesses.length);
      data.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
        content.appendChild(li);
      });
    });
});