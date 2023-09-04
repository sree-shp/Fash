const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    orderItems: [{
        type: Object,
    }],
    total: {
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

module.exports = mongoose.model("Order", orderSchema);