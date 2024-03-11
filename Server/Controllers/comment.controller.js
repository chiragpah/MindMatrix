// const Message = require('../Models/Message.model');

// exports.getMessages = async (req, res) => {
//   try {
//     const messages = await Message.find().sort({ timestamp: -1 }).limit(50);
//     res.json(messages);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createMessage = async (req, res) => {
//   const { username, message } = req.body;
//   if (!username || !message) {
//     return res.status(400).json({ message: 'Username and message are required.' });
//   }

//   const newMessage = new Message({ username, message });

//   try {
//     const savedMessage = await newMessage.save();
//     res.status(201).json(savedMessage);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// controllers/comment.controller.js
// const Comment = require('../models/comment.model');

// Get comments for a specific video
exports.getComments = async (req, res) => {
  const { videoId } = req.params;
  try {
    const comments = await Comment.find({ videoId }).sort({ timestamp: -1 }).limit(50);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  const { videoId, userId, content, parentId } = req.body;
  try {
    const newComment = new Comment({ videoId, userId, content, parentId });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
