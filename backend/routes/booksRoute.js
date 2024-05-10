import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


// Route for saving a new book
router.post('/', async (req, res) => {
    try {
        if (req.body.title || req.body.author || req.body.publishedYear) {
            const newBook = {
                title: req.body.title,
                author: req.body.author,
                publishedYear: req.body.publishedYear,
            }

            const book = await Book.create(newBook);

            return res.status(201).send(book);
        }
        else return res.status(400).send({ message: "All fields are required" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route for getting all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            length: books.length,
            data: books,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route for getting book by id
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const book = await Book.findById(id);
        return res.status(200).json({ book });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route for updating book by id
router.put('/:id', async (req, res) => {
    try {
        if (req.body.title || req.body.author || req.body.publishedYear) {
            const { id } = req.params;
            const { title, author, publishedYear } = req.body;
            const result = await Book.findByIdAndUpdate(id, { title, author, publishedYear });

            if (result) {
                return res.status(200).send({ message: "Book updated successfully" });
            }

            return res.status(404).send({ message: "Book not found" });
        }
        else return res.status(400).send({ message: "All fields are required" });



    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route for deleting book by id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Get the id from the request parameters
        const result = await Book.findByIdAndDelete(id);

        if (result) {
            return res.status(200).send({ message: "Book deleted successfully" });
        }

        return res.status(404).send({ message: "Book not found" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

export default router