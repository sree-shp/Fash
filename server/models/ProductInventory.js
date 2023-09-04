const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const productInventory = new mongoose.Schema({
    product_id: {
        type: ObjectId,
        required: true
    },
    quantity: [{
        type: Object,
    }
    ],
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

module.exports = mongoose.model("ProductInventory", productInventory);