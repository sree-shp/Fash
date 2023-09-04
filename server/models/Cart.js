const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    product: [{
        id: {
            type: ObjectId,
            required: true
        },
        name: {
            type: String
        },
        brand: {
            type: String
        },
        img: {
            type: String
        },
        quantity: {
            type: Number,
            required: true
        },
        size: {
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Cart", cartSchema);