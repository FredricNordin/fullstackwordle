import express from 'express';
import cors from 'cors';
import { highscore } from './highscore.js';
import words from './words.js';

// Settings.
const app = express();
app.use(express.json());

// Allow React to access/fetch the server locally.
const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))

// Serve game build files for access.
app.use(express.static("./GAME/build"));

// Get highscores.
app.get('/api/highscore', async (req, res) => {
    const scores = await highscore.find();
    res.json(scores);
});

// Post highscore.
app.post('/api/highscore', async (req, res) => {
    const score = new highscore(req.body);
    await score.save();
    res.json(score);
});

// Get words from words.js matching the length of :chars.
app.get('/api/words/:chars', async (req, res) => {
    const chars = parseInt(req.params.chars, 10);
    const data = words.filter(word => word.length === chars);
    // keep only one word.
    const word = data[Math.floor(Math.random() * data.length)];
    if (word) {
        res.json(word);
    } else {
        res.status(404).send('Not found');
    }
});

// Get words from words.js matching the length of :chars & no repeated letters.
app.get('/api/words/:chars/norepeat', async (req, res) => {
    const chars = parseInt(req.params.chars, 10);
    const data = words.filter(word => word.length === chars);
    // keep only one word with no repeated letters.
    const word = data.find(word => {
        const letters = word.split('');
        return letters.every(letter => letters.indexOf(letter) === letters.lastIndexOf(letter));
    });
    if (word) {
        res.json(word);
    } else {
        res.status(404).send('Not found');
    }
});

// Send not found if nothing matches the route.
app.get("/*", (req, res) => {
    res.status(404).send("Not found");
});


export default app;