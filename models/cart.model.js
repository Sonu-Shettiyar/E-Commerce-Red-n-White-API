// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 1
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
}, {
    versionKey: false
});

const Product = mongoose.model('cart', productSchema);

module.exports = Product;
