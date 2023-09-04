const mongoose = require('mongoose');

const productCategory = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required:true
    },
    group: {
        type: String,
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
    deleted_at: {
        type: Date
    }
})
;

module.exports = mongoose.model("ProductCategory", productCategory);