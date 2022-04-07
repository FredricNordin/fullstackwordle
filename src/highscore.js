import mongoose from "mongoose";

const highscore = mongoose.model('highscore', { // 'highscore' + 's' collection on MongoDB Atlas.
    name: String,
    score: Number,
});

export { highscore }