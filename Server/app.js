
require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const cookiesParser = require("cookie-parser")
const ErrorMiddleware = require("./middleware/error")
const userRouter = require("./routes/user.route")
const courseRouter=require("./routes/course.route")
// const orderRouter=require("./routes/order.route")
const notificationRoute=require("./routes/notification.route")
app.use(express.json({ limit: "50mb" }));
app.use(cookiesParser());
const cookieParser = require('cookie-parser');
app.use(cors({origin:'http://localhost:4200'}));
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const commentRoutes = require('./routes/comment.route');
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:4200", // Allow requests from your Angular app origin
      methods: ["GET", "POST"], // Specify which HTTP methods are allowed
      allowedHeaders: ["my-custom-header"], // Optional: specify headers
      credentials: true // Optional: if your client sends credentials like cookies
    }
  });

app.use(cookieParser());
// const cloudinary=require("cloudinary")
const connectDb = require("./utils/db");
const { start } = require("repl");
const { initSocketServer } = require("./socketServer");
// const multer = require("multer");
// const path=require("path")

app.get("/test", (req, res, next) => {
    console.log("we have it "+req.cookies.access_token)
    res.status(200).json({
        success: true,
        message: "API WORKING"
    })
})
app.use(express.urlencoded({extended:true}))
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
// app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRoute);
// app.get('/test/cookies', (req, res) => {
//     console.log("we have it "+req.cookies.access_token); // Log the entire cookies object
//     const accessToken = req.cookies.access_token;
//     console.log('Access Token:', accessToken);
//     // ... rest of your code
// });

// Socket.IO Connection
// io.on('connection', (socket) => {
//     socket.emit("message","welcome to mind matrix")
//     console.log('New client connected');
  
//     // Listen for new comments and broadcast to all clients
//     socket.on('newComment', (comment) => {
//       io.emit('newComment', comment);
//     });
  
//     socket.on('disconnect', () => {
//       console.log('Client disconnected');
//     });
//   });
  
  // API Routes
  app.use('/api', commentRoutes);
  



app.all("*", (req, res, next) => {
    const err = new Error("Route not found");
    err.status = 404;
    next(err)

})
app.use(ErrorMiddleware)


// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.CLOUD_API_KEY,
//     api_secret:process.env.CLOUD_SECRET_KEY
// })

initSocketServer(server);
app.use((req, _res, next) => {
    req.io = io;
    next();
});

server.listen(3000, function () {
    console.log(`server is running:${process.env.PORT}`);

    connectDb();
});



