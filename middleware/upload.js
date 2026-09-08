import multer from 'multer';

// Memory storage keeps file buffers in memory for direct stream upload to Cloudinary
const storage = multer.memoryStorage();

// File filter: accept only image formats
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (JPG, PNG, WebP, SVG, GIF) are allowed'), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB limit per file
    files: 10 // Max 10 files in a single batch
  }
});
