const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
    maxlength: 32,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 32,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please Provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
  passwordChangedAt: Date,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  loginPassword,
  userPassword
) {
  return await bcrypt.compare(loginPassword, userPassword);
};

userSchema.methods.passwordChangedAfter = function (JwtTimestamp) {
  if (this.passwordChangedAt) {
    const passwordChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JwtTimestamp < passwordChangedTimestamp;
  }
  return false;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
