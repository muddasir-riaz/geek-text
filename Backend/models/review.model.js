const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    usernameAndTitle:{type: String, required: true, unique: true, trim: true, minlength: 3},
    booktitle:{type: String, required: true,trim: true, minlength: 3},
    username:{type: String, required: true, trim: true,},
    rating:{ type: Number, required: true, max: 5, min: 0},
    textBox:{ type: String, required: false}
},{
    timestamps: true,
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;