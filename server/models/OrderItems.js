const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const orderItems = new mongoose.Schema({
    order_id: {
        type: ObjectId,
        required: true
    },
    product_id: [{
        type: ObjectId,
        required: true
    }],
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: () => Date.now()
    },
    modified_at: {
        type: Date, 
        default: () => Date.now()
    },
})
;

module.exports = mongoose.model("OrderItems", orderItems);