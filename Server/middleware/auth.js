require("dotenv").config();
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const redis = require("../utils/redis");
const isAuthenticated = async (req, res, next) => {
    
  const access_token = req.headers.access_token;
  console.log("this is", access_token);
  if (!access_token) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }
  const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);
  if (!decoded) {
    return next(new ErrorHandler("access token not valid", 400));
  }
  const user = await redis.get(decoded.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }
  req.user = JSON.parse(user);
  console.log("next middleware is called ");
  next();
};
const authorizeRoles = (...roles) => {
  console.log("we are checking the admin");
  return (req, res, next) => {
    if (!roles.includes(req.user?.role || "")) {
      return next(
        new ErrorHandler(`Role:${req.user?.role} is not allowed to access`, 403)
      );
    }
    console.log("next middleware is called")
    next();
  };
};
module.exports = { isAuthenticated, authorizeRoles };
