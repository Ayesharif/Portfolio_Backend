import Skill from '../models/Skill.js';

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
export const getSkills = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;

    const skills = await Skill.find(filter).sort({ order: 1, level: -1 });
    res.status(200).json({ success: true, count: skills.length, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new skill
// @route   POST /api/skills
// @access  Protected
export const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, message: 'Skill added', data: skill });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Protected
export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill not found' });
    }
    res.status(200).json({ success: true, message: 'Skill updated', data: skill });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Protected
export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill not found' });
    }
    res.status(200).json({ success: true, message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
