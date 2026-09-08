import Education from '../models/Education.js';

// @desc    Get all education
// @route   GET /api/education
// @access  Public
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: education.length, data: education });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create education
// @route   POST /api/education
// @access  Protected
export const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json({ success: true, message: 'Education added', data: education });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update education
// @route   PUT /api/education/:id
// @access  Protected
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!education) {
      return res.status(404).json({ success: false, message: 'Education not found' });
    }
    res.status(200).json({ success: true, message: 'Education updated', data: education });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete education
// @route   DELETE /api/education/:id
// @access  Protected
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ success: false, message: 'Education not found' });
    }
    res.status(200).json({ success: true, message: 'Education removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
