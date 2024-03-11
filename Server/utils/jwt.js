require("dotenv").config();
const Redis = require("../utils/redis.js");

// const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXP || "300", 10);
const refreshTokenExpire = parseInt(
  process.env.REFRESH_TOKEN_EXP || "1200",
  10
);

const accessTokenExpire = 24; // Set the expiration time to 24 hours

const accessTokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
  maxAge: accessTokenExpire * 60 * 60 * 1000,
  // httpOnly: true,
  sameSite: "lax",
};

const refreshTokenOptions = {
  expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
  maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
  // httpOnly: true,
  sameSite: "lax",
};
const sendToken = (user, statusCode, res) => {
  // console.log("we are sending the token using send token in jwt.js");
  const accessToken = user.SignAccessToken();
  res.cookie("access_token", accessToken, accessTokenOptions);
  // console.log("we got access token inside jwt.js file "+accessToken);
  const refreshToken = user.SignRefreshToken();
  
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);
  // console.log("we got refresh token inside jwt.js file "+refreshToken);

  Redis.set(user._id, JSON.stringify(user));
  //parse environment variable to integerate with fallback values

 
  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
    refreshToken,
  });
};
module.exports = {
  sendToken,
  accessTokenOptions,
  refreshTokenOptions,
};
