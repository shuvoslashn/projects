// import packages
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// config dotenv
dotenv.config();

// app initialize
const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// check connection route
app.get('/', async (req, res) => {
    res.send('Hello from Imaginary');
});

// start server
const startServer = async () => {
    app.listen(8080, () => {
        console.log(`Server has started on port`);
    });
};
startServer();
