import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;
    if (featured === 'true') filter.featured = true;

    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Protected
export const createProject = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (Array.isArray(payload.images) && payload.images.length > 0 && !payload.image) {
      payload.image = payload.images[0];
    } else if (payload.image && (!payload.images || payload.images.length === 0)) {
      payload.images = [payload.image];
    }

    const project = await Project.create(payload);
    res.status(201).json({ success: true, message: 'Project created', data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Protected
export const updateProject = async (req, res) => {
  try {
    const payload = { ...req.body };
    if (Array.isArray(payload.images) && payload.images.length > 0 && !payload.image) {
      payload.image = payload.images[0];
    } else if (payload.image && (!payload.images || payload.images.length === 0)) {
      payload.images = [payload.image];
    }

    const project = await Project.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true
    });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, message: 'Project updated', data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Protected
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
