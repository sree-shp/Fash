// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

// Import route handlers
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const searchRoutes = require("./routes/searchRoutes.js");

// Initialize Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true, // Enable credentials (cookies, authorization headers) cross-origin
  })
);

// Set security HTTP headers with Helmet middleware
app.use(helmet());

// Limit requests from same API with rate limiter middleware
const limiter = rateLimit({
  max: 100, // Max requests per hour
  windowMs: 60 * 60 * 1000, // 1 hour window
  message: "Too many requests from this IP, please try again in an hour",
});
app.use("/api", limiter);

// Parse JSON request body and limit body size
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS attacks
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Define API routes
app.use("/api/v2/user", userRoutes);
app.use("/api/v2/product", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/order", orderRoutes);
app.use("/api/v2/search", searchRoutes);

// Connect to MongoDB database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  });

// Define the port for the server to listen on
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
