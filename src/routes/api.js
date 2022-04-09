import express from 'express';
import { highscore } from '../db/highscore.js';
import words from '../words/words.js';

const apiRoute = express.Router();

// Get highscores.
apiRoute.get('/highscore', async (req, res) => {
    const scores = await highscore.find();
    res.json(scores);
});

// Post highscore.
apiRoute.post('/highscore', async (req, res) => {
    console.log(req.body)
    const score = new highscore(req.body);
    await score.save();
    res.json(score);
});

// Get words from words.js matching the length of :chars.
apiRoute.get('/words/:chars/allowed', async (req, res) => {
    const chars = parseInt(req.params.chars, 10);
    const data = words.filter(word => word.length === chars);
    const word = data[Math.floor(Math.random() * data.length)];
    if (word) {
        res.json(word);
    } else {
        res.status(404).send('Not found');
    }
});

// Get words from words.js matching the length of :chars with no two of the same letters. (Example: HELLO).
apiRoute.get('/words/:chars/denied', async (req, res) => {
    const chars = parseInt(req.params.chars, 10);
    const data = words.filter(word => word.length === chars);
    const word = data.filter(word => word.split('').filter(letter => word.split('').filter(letter2 => letter === letter2).length === 1).length === word.length);
    const word2 = word[Math.floor(Math.random() * word.length)];
    if (word2) {
        res.json(word2);
    } else {
        res.status(404).send('Not found');
    }
});

export default apiRoute;