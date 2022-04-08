import mongoose from "mongoose";

const highscore = mongoose.model('highscore', { // 'highscore' + 's' collection on MongoDB Atlas.
    name: String,
    time: Number,
    length: Number,
    dupes: String,
    guesses: Array,
});

export { highscore }