const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const userAddress = new mongoose.Schema({
    user_id: {
        type: ObjectId
    },
    address_line1: {
        type: String,
        maxlength: 50,
        required: true
    },
    address_line2: {
        type: String,
        maxlength: 50
    },
    city: {
        type: String,
        required: true
    },
    pin_code: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
    },
    telephone: {
        type: Number,
        length: 10
    }
})

module.exports = mongoose.model("UserAddress", userAddress);