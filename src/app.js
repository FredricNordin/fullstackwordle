import express from 'express';
import apiRoute from './routes/api.js';
import path from 'path';
import cors from 'cors';

// Settings.
const app = express();
app.use(express.json());
const __dirname = path.resolve();

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

// Render the Highscore page.
app.get("/highscore", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/highscore.html"));
});

// API Routes. (/routes/api.js)
app.use("/api", apiRoute);

// Send not found if nothing matches the route.
app.get("/*", (req, res) => {
    res.status(404).send("Not found");
});

export default app;