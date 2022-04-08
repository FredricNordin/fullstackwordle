// If window location is /highscore, fetch highscore data from API and display it.
if (window.location.pathname === '/highscore') {
    fetch('http://localhost:5080/api/highscore')
        .then(response => response.json())
        .then(data => {
        const highscore = document.querySelector('.highscores');
        highscore.innerHTML = '';
        data.forEach(score => {
            const li = document.createElement('li');
            li.innerHTML = `${score.name} - Guessed a word with ${score.length} letters - Solved in ${score.time} seconds - With ${score.dupes} duplicates - And guessed correctly after ${score.guesses.length} tries!`;
            highscore.appendChild(li);
        });
        });
    }