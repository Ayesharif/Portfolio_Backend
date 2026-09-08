import Certification from '../models/Certification.js';

// @desc    Get all certifications
// @route   GET /api/certifications
// @access  Public
export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: certifications.length, data: certifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create certification
// @route   POST /api/certifications
// @access  Protected
export const createCertification = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (Array.isArray(payload.images) && payload.images.length > 0 && !payload.image) {
      payload.image = payload.images[0];
    } else if (payload.image && (!payload.images || payload.images.length === 0)) {
      payload.images = [payload.image];
    }

    const certification = await Certification.create(payload);
    res.status(201).json({ success: true, message: 'Certification added', data: certification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update certification
// @route   PUT /api/certifications/:id
// @access  Protected
export const updateCertification = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (Array.isArray(payload.images) && payload.images.length > 0 && !payload.image) {
      payload.image = payload.images[0];
    } else if (payload.image && (!payload.images || payload.images.length === 0)) {
      payload.images = [payload.image];
    }

    const certification = await Certification.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true
    });
    if (!certification) {
      return res.status(404).json({ success: false, message: 'Certification not found' });
    }
    res.status(200).json({ success: true, message: 'Certification updated', data: certification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete certification
// @route   DELETE /api/certifications/:id
// @access  Protected
export const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) {
      return res.status(404).json({ success: false, message: 'Certification not found' });
    }
    res.status(200).json({ success: true, message: 'Certification removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
