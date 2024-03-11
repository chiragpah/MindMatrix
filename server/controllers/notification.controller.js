const notificationModel=require("../models/notification.model")
const ErrorHandler=require("../utils/ErrorHandler")
const cron=require("node-cron")

// get all notifications --- only admin
const getNotifications = (async (req, res, next) => {
    try {
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

// // delete notification --- only admin
cron.schedule("0 0 0 * * *", async() => {
const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
 await notificationModel.deleteMany({status:"read",createdAt: {$lt: thirtyDaysAgo}});
    console.log('Deleted read notifications');
 });
module.exports={getNotifications,updateNotification};