const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String },
  publishedDate: { type: Date },
  bookFile: { type: String, required: true },
  coverImage: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
