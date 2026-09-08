import Experience from '../models/Experience.js';

// @desc    Get all experiences
// @route   GET /api/experience
// @access  Public
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: experiences.length, data: experiences });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new experience
// @route   POST /api/experience
// @access  Protected
export const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, message: 'Experience added', data: experience });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Protected
export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }
    res.status(200).json({ success: true, message: 'Experience updated', data: experience });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Protected
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }
    res.status(200).json({ success: true, message: 'Experience removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
