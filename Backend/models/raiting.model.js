const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raitingSchema = new Schema({
    usernameAndTitle:{type: String, required: true, unique: true, trim: true, minlength: 3},
    booktitle:{type: String, required: true,trim: true, minlength: 3},
    username:{type: String, required: true, trim: true,},
    raiting:{ type: Number, required: true, max: 5, min: 0},
},{
    timestamps: true,
});

const Raiting = mongoose.model('Raiting', raitingSchema);

module.exports = Raiting;