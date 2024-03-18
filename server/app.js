require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const searchRoutes = require("./routes/searchRoutes.js");

const app = express();
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
  })
);

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data Sanitization against NOSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Prevent Parameter Pollution
app.use(hpp());

app.use("/api/v2/user", userRoutes);
app.use("/api/v2/product", productRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/order", orderRoutes);
app.use("/api/v2/search", searchRoutes);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running ");
});
