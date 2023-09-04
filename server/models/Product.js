const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category_id: {
        type: ObjectId,
        required: true
    },
    inventory_id: {
        type: ObjectId
    },
    images:[{
        type: String
    }],
    price: {
        type: Number,
        required: true
    },
    discount_id: {
        type: ObjectId,
    },
    rating: {
        type: Number
    },
    created_at: {
        type: Date,
        default: () => Date.now()
    },
    modified_at: {
        type: Date,
        default: () => Date.now()
    },
    deleted_at: {
        type: Date
    }
});

module.exports = mongoose.model("Products", productsSchema);