
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  authorFirst: { type: String, required: true },
  authorLast: { type: String, required: true },
  biography: { type: String, required: true },
  publisher: { type: String, required: true }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;