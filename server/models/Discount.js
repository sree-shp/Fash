const mongoose = require('mongoose');

const discount = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    discount_percent: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean
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
})
;

module.exports = mongoose.model("Discount", discount);