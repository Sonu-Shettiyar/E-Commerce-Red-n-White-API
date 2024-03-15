// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: Number,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    inStock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
