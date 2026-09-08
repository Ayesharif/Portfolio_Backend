import express from 'express';
import Profile from '../models/Profile.js';
import Experience from '../models/Experience.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';
import Education from '../models/Education.js';
import User from '../models/User.js';
import { initialSeedData } from '../data/seedData.js';

const router = express.Router();

// @desc    Seed initial portfolio data into MongoDB
// @route   POST /api/seed
// @access  Public / Helper
router.post('/', async (req, res) => {
  try {
    // 1. Profile
    await Profile.deleteMany({});
    const profile = await Profile.create(initialSeedData.profile);

    // 2. Experiences
    await Experience.deleteMany({});
    const experiences = await Experience.insertMany(initialSeedData.experiences);

    // 3. Projects
    await Project.deleteMany({});
    const projects = await Project.insertMany(initialSeedData.projects);

    // 4. Skills
    await Skill.deleteMany({});
    const skills = await Skill.insertMany(initialSeedData.skills);

    // 5. Certifications
    await Certification.deleteMany({});
    const certifications = await Certification.insertMany(initialSeedData.certifications);

    // 6. Education
    await Education.deleteMany({});
    const education = await Education.insertMany(initialSeedData.education);

    // 7. Ensure Default Admin User exists
    let adminUser = await User.findOne({ email: 'ayesharif@gmail.com' });
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Muhammad Ayesh',
        email: 'ayesharif@gmail.com',
        password: 'admin123',
        role: 'admin'
      });
    }

    res.status(200).json({
      success: true,
      message: 'MongoDB successfully seeded with Muhammad Ayesh portfolio data!',
      summary: {
        profile: profile.name,
        experiencesCount: experiences.length,
        projectsCount: projects.length,
        skillsCount: skills.length,
        certificationsCount: certifications.length,
        educationCount: education.length,
        adminUser: adminUser.email
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
