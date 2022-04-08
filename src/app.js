import express from 'express';
import cors from 'cors';
import { highscore } from './highscore.js';
import words from './words.js';
import path from 'path';

// Settings.
const app = express();
const __dirname = path.resolve();
app.use(express.json());

// Allow React to access/fetch the server locally. (Uncomment these lines if you want to use React in dev mode.)
// const whitelist = ["http://localhost:3000"]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error("Not allowed by CORS"))
//         }
//     },
//     credentials: true,
// }
// app.use(cors(corsOptions));


// Serve folders for access to the Game and about/highscore pages.
app.use(express.static("./reactgame/build")); // Gets rendered "/" by default.
app.use(express.static("./public"));

// Render the About page.
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/about.html"));
});

// Render the Highscores page.
app.get("/highscore", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/highscore.html"));
});

// Get highscores.
app.get('/api/highscore', async (req, res) => {
    const scores = await highscore.find();
    res.json(scores);
});

// Post highscore.
app.post('/api/highscore', async (req, res) => {
    console.log(req.body)
    const score = new highscore(req.body);
    await score.save();
    res.json(score);
});

// Get words from words.js matching the length of :chars.
app.get('/api/words/:chars/allowed', async (req, res) => {
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

// Get words from words.js matching the length of :chars with no two of the same letters. (Example: HELLO).
app.get('/api/words/:chars/denied', async (req, res) => {
    const chars = parseInt(req.params.chars, 10);
    const data = words.filter(word => word.length === chars);
    const word = data.filter(word => word.split('').filter(letter => word.split('').filter(letter2 => letter === letter2).length === 1).length === word.length);
    // Keep only one word.
    const word2 = word[Math.floor(Math.random() * word.length)];
    if (word2) {
        res.json(word2);
    } else {
        res.status(404).send('Not found');
    }
});

// Send not found if nothing matches the route.
app.get("/*", (req, res) => {
    res.status(404).send("Not found");
});


export default app;