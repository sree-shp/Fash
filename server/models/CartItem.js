const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const cartItem = new mongoose.Schema({
    session_id: [{
        type: ObjectId,
        required: true
    }],
    product_id: [{
        type: ObjectId,
        required: true
    }],
    quantity: {
        type: Number
    },
    created_at: {
        type: Date,
        default: () => Date.now()
    },
    modified_at: {
        type: Date, 
        default: () => Date.now()
    }
})
;

module.exports = mongoose.model("CartItem", cartItem);