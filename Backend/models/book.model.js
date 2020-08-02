
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: Number, required: true, unique: true, minlength: 10, maxlength: 10 },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  yearPublished: { type: Number, required: true, minlength: 4, maxlength: 4 },
  price: { type: Number, required: true },
  copiesSold: { type: Number, required: true },
  rating: {type: Number, required: false, default: 0 }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;