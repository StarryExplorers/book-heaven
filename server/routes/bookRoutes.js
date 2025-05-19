const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching books' });
  }
});

// Add a new book
router.post('/books', async (req, res) => {
  const { title, author, genre, description, bookFile, coverImage } = req.body;

  try {
    const newBook = new Book({ title, author, genre, description, bookFile, coverImage });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ msg: 'Error adding book' });
  }
});

module.exports = router;
