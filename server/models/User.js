const mongoose = require("mongoose"); // Import Mongoose
const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing
const validator = require("validator"); // Import validator for email validation

// Define the schema for the user
const userSchema = new mongoose.Schema({
  name: {
    type: String, // Type for user's first name
    trim: true, // Trim whitespace from input
    required: [true, "Name is required"], // Name is required with a custom error message
    maxlength: 32, // Maximum length for name
  },
  lastName: {
    type: String, // Type for user's last name
    trim: true, // Trim whitespace from input
    maxlength: 32, // Maximum length for last name
  },
  phone: {
    type: Number, // Type for user's phone number
    required: [true, "Phone number is required"], // Phone number is required with a custom error message
  },
  email: {
    type: String, // Type for user's email
    trim: true, // Trim whitespace from input
    unique: true, // Ensure email is unique
    required: [true, "Email is required"], // Email is required with a custom error message
    validate: [validator.isEmail, "Please provide a valid email"], // Validate email format using validator
  },
  password: {
    type: String, // Type for user's password
    required: [true, "Password is required"], // Password is required with a custom error message
    select: false, // Ensure password is not selected by default in query results
  },
  confirmPassword: {
    type: String, // Type for confirming user's password
    required: [true, "Confirm Password is required"], // Confirm Password is required with a custom error message
    validate: {
      validator: function (el) {
        return el === this.password; // Validate that confirmPassword matches password
      },
      message: "Passwords do not match", // Custom error message if passwords do not match
    },
  },
  passwordChangedAt: Date, // Timestamp for when the user's password was last changed
  createdAt: {
    type: Date, // Timestamp for user creation
    immutable: true, // Ensure createdAt cannot be modified
    default: () => Date.now(), // Default value is current timestamp when user is created
  },
  updatedAt: {
    type: Date, // Timestamp for when user data was last updated
    default: () => Date.now(), // Default value is current timestamp when user data is updated
  },
});

// Middleware to hash password before saving user to database
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Check if password field is modified
    this.password = await bcrypt.hash(this.password, 12); // Hash password with bcrypt
    this.confirmPassword = undefined; // Clear confirmPassword field after hashing
  }
  next();
});

// Method to compare entered password with stored hashed password
userSchema.methods.correctPassword = async function (
  loginPassword,
  userPassword
) {
  return await bcrypt.compare(loginPassword, userPassword);
};

// Method to check if user's password has been changed after issuing a JWT token
userSchema.methods.passwordChangedAfter = function (JwtTimestamp) {
  if (this.passwordChangedAt) {
    const passwordChangedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JwtTimestamp < passwordChangedTimestamp; // Compare JWT timestamp with password change timestamp
  }
  return false; // Return false if passwordChangedAt is not set
};

// Create a Mongoose model named "User" based on the userSchema
const User = mongoose.model("User", userSchema);

module.exports = User; // Export the User model
