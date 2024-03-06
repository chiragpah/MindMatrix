const ErrorHandler=require("../utils/ErrorHandler")
const orderModel=require("../models/order.model")
const userModel=require("../models/user.model")
const CourseModel=require("../models/course.model")
const path=require("path")
const ejs=require("ejs")
const sendMail=require("../utils/sendMail")
const notificationModel=require("../models/notification.model")
const {newOrder,getAllOrdersService}=require("../services/order.service")
const redis=require("../utils/redis")
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// create order
const createOrder = (async (req, res, next) => {
   
    try {
     
      const { courseId, payment_info } = req.body  ;
 
    //   if (payment_info) {
    //     if ("id" in payment_info) {
    //       const paymentIntentId = payment_info.id;
    //       const paymentIntent = await stripe.paymentIntents.retrieve(
    //         paymentIntentId
    //       );

    //       if (paymentIntent.status !== "succeeded") {
    //         return next(new ErrorHandler("Payment not authorized!", 400));
    //       }
    //     }
    //   }

      const user = await userModel.findById(req.user?._id);
      const courseExistInUser = user?.courses.some((courses) => courses._id == courseId);
      console.log(user,courseExistInUser);
      
      if (courseExistInUser) {
        return next(new ErrorHandler("You have already purchased this course", 400)
        );
      }
    

      const course= await CourseModel.findById(courseId);
      if (!course) {
          return next(new ErrorHandler("Course not found", 404));
        }
        

      const data = {
        courseId: course._id,
        userId: user?._id,
        payment_info,
      };
      
    
     
      const mailData = {
        order: {
          _id: course._id.toString().slice(0, 6),
          name: course.name,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      };

      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/order-confirmation.ejs"),mailData 
      );

      try {
        if (user) {
          await sendMail({
            email: user.email,
            subject: "Order Confirmation",
            template: "order-confirmation.ejs",
            html
          });
        }
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }

      user?.courses.push(course?._id);

      await redis.set(req.user?._id, JSON.stringify(user));

      await user?.save();

      await notificationModel.create({
        user: user?._id,
        title: "New Order",
        message: `You have a new order from ${course?.name}`,
      });
   
          course.purchased = course.purchased + 1;
        
        await course.save();
        
    newOrder(data,res,next)
     
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });



  const getAllOrders =(async (req, res,next) => {
      try {
        getAllOrdersService(res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  );




module.exports= {createOrder,getAllOrders}