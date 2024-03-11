const express = require("express")
const { uploadCourse,editCourse,getSingleCourse,getAllCourses,getCourseByUser,addComment,addReply,addReview,getAdminAllCourses,deleteCourse,getComments,addReplyToReview,uploadVideo } = require("../Controllers/course.controller.js");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");
const courseRouter= express.Router();
const multer=require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Where to store the uploaded files
    },
    filename: function (req, file, cb) {
      // Customize filename if needed
      cb(null, file.originalname);
    }
  });

  // Init upload
  const upload = multer({
    storage: storage,fileFilter: function (req, file, cb) {
      if (file.mimetype.startsWith('image/jpeg')||file.mimetype.startsWith('video/mp4')) {
          cb(null, true);
      } else {
          cb(new Error('Only JPEG files and mp4 are allowed!'), false);
      }
  }
  })
  

console.log("we are isndie the course route")
// console.log(isAuthenticated);
// courseRouter.post("/create-course",isAuthenticated,authorizeRoles("admin"), upload.any(),uploadCourse);
// courseRouter.put("/edit-course/:id",isAuthenticated,authorizeRoles("admin"),editCourse);
// courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-courses",getAllCourses);
console.log("we are behind get admin all courses")
courseRouter.get("/get-admin-courses",isAuthenticated,authorizeRoles("admin"),getAdminAllCourses)

// courseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);
courseRouter.post("/add-comment",isAuthenticated,addComment);
courseRouter.put("/add-reply",isAuthenticated,addReply);
// courseRouter.put("/add-review/:id",isAuthenticated,addReview);
courseRouter.get("/get-comments", isAuthenticated,getComments);

// // courseRouter.put()
// courseRouter.put("/add-reply-review",isAuthenticated,authorizeRoles("admin"),addReplyToReview);
  
courseRouter.delete("/delete-course/:id",isAuthenticated,authorizeRoles("admin"),deleteCourse);
// courseRouter.post("/upload-video", upload.single('video'),uploadVideo)
module.exports=courseRouter