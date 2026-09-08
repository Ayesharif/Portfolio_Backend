import express from 'express';
import {
  sendMessage,
  getMessages,
  markMessageAsRead,
  deleteMessage
} from '../controllers/messageController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', sendMessage);
router.get('/', protect, getMessages);
router.put('/:id/read', protect, markMessageAsRead);
router.delete('/:id', protect, deleteMessage);

export default router;
