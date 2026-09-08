import express from 'express';
import { uploadSingleImage, uploadMultipleImages } from '../controllers/uploadController.js';
import { upload } from '../middleware/upload.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Upload single image (field name: 'image')
router.post('/single', protect, upload.single('image'), uploadSingleImage);

// Upload multiple images (field name: 'images', max 10 files)
router.post('/multiple', protect, upload.array('images', 10), uploadMultipleImages);

export default router;
