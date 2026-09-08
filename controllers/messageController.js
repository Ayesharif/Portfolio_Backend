import Message from '../models/Message.js';

// @desc    Send a new message (Public from Contact Form)
// @route   POST /api/messages
// @access  Public
export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.'
      });
    }

    const newMessage = await Message.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: newMessage
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to send message.'
    });
  }
};

// @desc    Get all messages
// @route   GET /api/messages
// @access  Protected (Admin only)
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    const unreadCount = await Message.countDocuments({ isRead: false });

    res.status(200).json({
      success: true,
      count: messages.length,
      unreadCount,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Mark message as read / toggle read status
// @route   PUT /api/messages/:id/read
// @access  Protected (Admin only)
export const markMessageAsRead = async (req, res) => {
  try {
    const { isRead } = req.body;
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: isRead !== undefined ? isRead : true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message status updated',
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete message
// @route   DELETE /api/messages/:id
// @access  Protected (Admin only)
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
