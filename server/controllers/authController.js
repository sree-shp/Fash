const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.signup = async (req, res, next) => {
  const name = req.body.name;
  const lastName = req.body.lastName || "";
  const email = req.body.email;
  const phone = req.body.telephone;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      Secure: true,
      sameSite: "none",
    });

    newUser.password = undefined;

    res.status(200).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide a valid email");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Invalid Credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    user.password = undefined;

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.protect = async (req, res, next) => {
  let token;
  try {
    if (!req.headers.cookie) {
      throw new Error("No token Found, Unauthorized Access");
    }

    token = req.headers.cookie.split("=")[1];

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      throw new Error("No user found");
    }

    if (user.passwordChangedAfter(decoded.iat)) {
      throw new Error(
        "Password was changed after issuing token! Login again!!"
      );
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    status: "success",
    data: {
      message: "Logged Out Succeccfully",
    },
  });
};
