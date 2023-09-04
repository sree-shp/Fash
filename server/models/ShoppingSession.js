const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const shoppingSession = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true
    },
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

module.exports = mongoose.model("ShoppingSession", shoppingSession);