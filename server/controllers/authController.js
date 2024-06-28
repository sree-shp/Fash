const User = require("../models/User"); // Import User model
const jwt = require("jsonwebtoken"); // Import JSON Web Token library
const { promisify } = require("util"); // Import promisify function from Node.js util module

// Controller function to handle user signup
exports.signup = async (req, res, next) => {
  // Extract user data from request body
  const name = req.body.name;
  const lastName = req.body.lastName || "";
  const email = req.body.email;
  const phone = req.body.telephone;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  try {
    // Create a new user document in MongoDB
    const newUser = await User.create({
      name,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    });

    // Generate JSON Web Token (JWT) for authentication
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Set JWT as a cookie in the response
    res.cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    // Hide password field in response data
    newUser.password = undefined;

    // Send success response with user data and token
    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    // Send failure response if signup fails
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

// Controller function to handle user login
exports.login = async (req, res, next) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Throw error if email or password is missing
    if (!email || !password) {
      throw new Error("Please provide a valid email");
    }

    // Find user by email and include password field in query
    const user = await User.findOne({ email }).select("+password");

    // Throw error if no user found or password is incorrect
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Invalid Credentials");
    }

    // Generate JWT for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Set JWT as a cookie in the response
    res.cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    // Hide password field in user data
    user.password = undefined;

    // Send success response with user data and token
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    // Send failure response if login fails
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

// Middleware function to protect routes requiring authentication
exports.protect = async (req, res, next) => {
  let token;
  try {
    // Throw error if no token found in request headers
    if (!req.headers.cookie) {
      throw new Error("No token found, Unauthorized access");
    }

    // Extract token from cookie header
    token = req.headers.cookie.split("=")[1];

    // Verify token using JWT and decode its payload
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Find user by decoded user id
    const user = await User.findOne({ _id: decoded.id });

    // Throw error if no user found with decoded id
    if (!user) {
      throw new Error("No user found");
    }

    // Check if user's password was changed after issuing token
    if (user.passwordChangedAfter(decoded.iat)) {
      throw new Error(
        "Password was changed after issuing token! Login again!!"
      );
    }

    // Attach user object to request object for use in subsequent middleware or route handlers
    req.user = user;
    next(); // Call next middleware or route handler
  } catch (err) {
    // Send unauthorized access error response
    res.status(401).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

// Controller function to handle user logout
exports.logout = (req, res) => {
  // Clear token cookie
  res.clearCookie("token");

  // Send success response
  res.status(200).json({
    status: "success",
    data: {
      message: "Logged out successfully",
    },
  });
};
