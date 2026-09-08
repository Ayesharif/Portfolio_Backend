import Profile from '../models/Profile.js';

// @desc    Get profile data
// @route   GET /api/profile
// @access  Public
export const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create({
        name: 'Muhammad Ayesh',
        title: 'MERN Stack Developer',
        email: 'ayesharif@gmail.com'
      });
    }
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update profile data
// @route   PUT /api/profile
// @access  Protected
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create(req.body);
    } else {
      profile = await Profile.findByIdAndUpdate(profile._id, req.body, {
        new: true,
        runValidators: true
      });
    }
    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: profile
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
