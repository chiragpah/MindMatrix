// const express = require('express');
// const router = express.Router();
// const chatController = require('../controllers/chat.controller');

// // Get messages
// router.get('/messages', chatController.getMessages);

// // Post a new message
// router.post('/message', chatController.createMessage);

// module.exports = router;


// routes/comment.route.js
const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/comment.controller');

// Get comments for a specific video
router.get('/comments/:videoId', commentController.getComments);

// Create a new comment
router.post('/comments', commentController.createComment);

module.exports = router;
