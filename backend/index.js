import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body (JSON data)
app.use(express.json());

// Middleware for handling CORS errors
// Option 1: Allow all origins with default of cors (*)
app.use(cors())

// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));

app.get('/', (req, res) => {
    return res.status(200).send({
        success: true,
    });
});

app.use('/books', booksRouter);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

