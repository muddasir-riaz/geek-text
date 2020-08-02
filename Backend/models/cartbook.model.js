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

module.exports = Book = mongoose.model('book', bookSchema )