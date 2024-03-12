// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app=express();

// const uploader=(async(req,res)=>{
// console.log(req.body);

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Where to store the uploaded files
//   },
//   filename: function (req, file, cb) {
//     // Customize filename if needed
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// // Define a route to handle file upload
// app.post('/upload', upload.single('video'), (req, res) => {
//   // If file is successfully uploaded, Multer adds `file` object to request
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   // You can do further processing here, like saving the file path to a database
//   res.send('File uploaded successfully.');
// });

// // Serve uploaded files statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// })
// module.exports=uploader;