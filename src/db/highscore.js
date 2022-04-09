import mongoose from "mongoose";

// Model used for highscore.
const highscore = mongoose.model('highscore', { // 'highscore' + 's' collection on MongoDB Atlas.
    name: String,
    time: Number,
    length: Number,
    dupes: String,
    guesses: Array,
});

export { highscore }