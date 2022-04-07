import app from './src/js/app.js'
import mongoose from 'mongoose';

// MongoDB Atlas connection details.
mongoose.connect('mongodb+srv://wordle:fsBDgmGx5i6V2Arw@cluster0.cwrx9.mongodb.net/cluster0?retryWrites=true&w=majority')
console.log('Connecting to MongoDB Atlas.')

// Express port.
app.listen(5080);
console.log('Server is running on port 5080')