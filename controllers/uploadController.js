import { uploadBufferToCloudinary } from '../config/cloudinary.js';

// @desc    Upload single image to Cloudinary
// @route   POST /api/upload/single
// @access  Protected
export const uploadSingleImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided. Please select an image to upload.'
      });
    }

    const folder = req.body.folder || 'portfolio';
    const result = await uploadBufferToCloudinary(req.file.buffer, folder);

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully to Cloudinary',
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      width: result.width,
      height: result.height
    });
  } catch (error) {
    console.error('Cloudinary single upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload image to Cloudinary'
    });
  }
};

// @desc    Upload multiple images to Cloudinary
// @route   POST /api/upload/multiple
// @access  Protected
export const uploadMultipleImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No image files provided. Please select at least one image.'
      });
    }

    const folder = req.body.folder || 'portfolio';
    const uploadPromises = req.files.map((file) =>
      uploadBufferToCloudinary(file.buffer, folder)
    );

    const results = await Promise.all(uploadPromises);
    const urls = results.map((r) => r.secure_url);

    res.status(200).json({
      success: true,
      message: `${results.length} images uploaded successfully to Cloudinary`,
      urls,
      data: results.map((r) => ({
        url: r.secure_url,
        public_id: r.public_id,
        format: r.format,
        width: r.width,
        height: r.height
      }))
    });
  } catch (error) {
    console.error('Cloudinary multiple upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload images to Cloudinary'
    });
  }
};
