const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoppingcartSchema = new Schema({
    title: { type: String, required: true }
},{
    timestamps: true,
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingcartSchema);

module.exports = ShoppingCart;
