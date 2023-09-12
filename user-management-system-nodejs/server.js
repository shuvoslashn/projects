const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// configure dotenv
dotenv.config();

// app initialize
const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

// connect with mongoose
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.on(`connected`, () => {
    console.log(`Mongoose default connection open.`);
});
mongoose.connection.on(`error`, (err) => {
    console.log(`Mongoose default connection error.`);
});

//? check connection
app.get('/', (req, res) => {
    res.send('Server working');
});

// server listening
app.listen(port, () => {
    console.log(`server running at ${port}`);
});
