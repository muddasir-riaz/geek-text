const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ( {

    isbn: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    }
})

const Book = mongoose.model('cartbook', bookSchema);

module.exports = Book;
