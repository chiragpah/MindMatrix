const notificationModel=require("../models/notification.model")
const ErrorHandler=require("../utils/ErrorHandler")
// const cron=require("node-cron")

// get all notifications --- only admin
const getNotifications = (async (req, res, next) => {
  console.log("we are fetching the notifications")
    try {
      const notifications = await notificationModel.find().sort({
        createdAt: -1,
      });

      res.status(201).json({
        success: true,
        notifications
      });
    } catch (error) {
      console.log("we got the error")
      return next(new ErrorHandler(error.message, 500));
    }
  });

// // update notification status --- only admin
 const updateNotification = (async (req, res, next) => {
  try {
       const notification = await notificationModel.findById(req.params.id);
       if (!notification) {
         return next(new ErrorHandler("Notification not found", 404));
       } else {
         notification.status? (notification.status = "read"): notification?.status;
       }

       await notification.save();

       const notifications = await notificationModel.find().sort({
         createdAt: -1,
       });

       res.status(201).json({
         success: true,
         notifications,
       });
     } catch (error) {
      return next(new ErrorHandler(error.message, 500));
     }
   });

   const deleteNotification = async (req, res, next) => {
    console.log("we are inside delete notification ")
    try {
      const notificationId = req.params.id;
  
      // Check if the notification exists
      const existingNotification = await notificationModel.findById(notificationId);
      if (!existingNotification) {
        return res.status(404).json({
          success: false,
          message: 'Notification not found',
        });
      }
  
      // Delete the notification
      await existingNotification.deleteOne();
  
      res.status(200).json({
        success: true,
        message: 'Notification deleted successfully',
        notification: existingNotification,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  };
  

   const createNotification = async (req, res, next) => {
    try {
      const { title, message, status } = req.body;
  
      // Create a new notification
      const newNotification = new notificationModel({
        title,
        message,
        status: status || 'unread', // Set the default status if not provided
      });
  
      // Save the notification to the database
      await newNotification.save();
      console.log("new user registred")
      res.status(201).json({
        success: true,
        message: 'Notification created and saved successfully',
        notification: newNotification,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  };
// // delete notification --- only admin
// cron.schedule("0 0 0 * * *", async() => {
// const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
//  await notificationModel.deleteMany({status:"read",createdAt: {$lt: thirtyDaysAgo}});
//     console.log('Deleted read notifications');
//  });
module.exports={getNotifications,updateNotification,createNotification,deleteNotification};