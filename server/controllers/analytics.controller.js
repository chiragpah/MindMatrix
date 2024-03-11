
const ErrorHandler=require("../utils/ErrorHandler");

const {generateLast12MonthsData} =require("../utils/analytics.generator");
const userModel = require("../models/user.model")
const CourseModel = require("../models/course.model")
const orderModel=require("../models/order.model")

// get users analytics --- only for admin
const getUsersAnalytics =(
  async (req, res, next) => {
    try {
        console.log("hello inside analytics");
      const users = await generateLast12MonthsData(userModel);

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// get courses analytics --- only for admin
const getCoursesAnalytics = (
    async (req, res, next) => {
      try {
        const courses = await generateLast12MothsData(CourseModel);
  
        res.status(200).json({
          success: true,
          courses,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  );
  
  
// get order analytics --- only for admin
const getOrderAnalytics = (
    async (req, res, next) => {
      try {
        const orders = await generateLast12MothsData(OrderModel);
  
        res.status(200).json({
          success: true,
          orders,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  );
  module.exports={getOrderAnalytics,getCoursesAnalytics,getUsersAnalytics}