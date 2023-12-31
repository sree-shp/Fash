const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    last_name:{
        type: String,
        trim: true,
        maxlength: 32
    },
    telephone: {
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
 })

// userSchema.virtual("password")
// .set(function (password){
//     this._password = password
//     this.salt = uuidv1()
//     this.hashed_password = this.encryptPassword(password)
// })
// .get( function(){
//     return this._password
// })

// userSchema.methods = {
//     encryptPassword: function(password) {
//         if(!password) return "";
//         try{
//             return crypto.createHmac("sha1", this.salt)
//             .update(password)
//             .digest("hex")
//         }
//         catch (err) {
//             return "";
//         }
//     }
// }

module.exports = mongoose.model("User", userSchema);    