import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import seedRoutes from './routes/seedRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Models & Seed data for automatic initial bootstrap
import { initialSeedData } from './data/seedData.js';
import User from './models/User.js';
import Profile from './models/Profile.js';
import Experience from './models/Experience.js';
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import Certification from './models/Certification.js';
import Education from './models/Education.js';

// Load environment variables

dotenv.config();

const USE_DATABASE = process.env.USE_DATABASE !== 'false';

// Helper to auto-seed if database is empty
const autoBootstrapDatabase = async () => {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('🌱 Empty database detected. Auto-seeding initial portfolio data...');
      
      const profileCount = await Profile.countDocuments();
      if (profileCount === 0) {
        await Profile.create(initialSeedData.profile);
      }
      
      await Experience.insertMany(initialSeedData.experiences);
      await Project.insertMany(initialSeedData.projects);
      await Skill.insertMany(initialSeedData.skills);
      await Certification.insertMany(initialSeedData.certifications);
      await Education.insertMany(initialSeedData.education);
      console.log('✅ Initial portfolio data auto-seeded successfully!');
    }

    // Ensure default admin exists
    const adminCount = await User.countDocuments();
    if (adminCount === 0) {
      await User.create({
        name: 'Muhammad Ayesh',
        email: 'ayesharif@gmail.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('👑 Default admin created: ayesharif@gmail.com (Password: admin123)');
    }
  } catch (err) {
    console.warn('⚠️ Auto-bootstrap warning:', err.message);
  }
};

if (USE_DATABASE) {
  connectDB().then(() => {
    autoBootstrapDatabase();
  });
}

const app = express();

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'https://muhammadayesh.vercel.app'
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true); // Allow during local development
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health Check API
app.get('/api/health', async (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  let stats = null;

  if (isDbConnected) {
    try {
      const [projects, skills, experiences, messages] = await Promise.all([
        Project.countDocuments(),
        Skill.countDocuments(),
        Experience.countDocuments(),
        mongoose.connection.db.collection('messages').countDocuments().catch(() => 0)
      ]);
      stats = { projects, skills, experiences, messages };
    } catch {
      // stats optional
    }
  }

  res.status(200).json({
    status: 'online',
    database: isDbConnected ? 'connected' : (USE_DATABASE ? 'connecting/error' : 'disabled'),
    timestamp: new Date().toISOString(),
    message: 'Muhammad Ayesh Portfolio API is running smoothly 🚀',
    stats
  });
});

if (USE_DATABASE) {
  app.use('/api/auth', authRoutes);
  app.use('/api/profile', profileRoutes);
  app.use('/api/experience', experienceRoutes);
  app.use('/api/projects', projectRoutes);
  app.use('/api/skills', skillRoutes);
  app.use('/api/certifications', certificationRoutes);
  app.use('/api/education', educationRoutes);
  app.use('/api/messages', messageRoutes);
  app.use('/api/seed', seedRoutes);
  app.use('/api/upload', uploadRoutes);
}

// Root route
app.get('/', (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.send(`
    <div style="font-family: sans-serif; padding: 40px; background: #0b0f17; color: #34d399; min-height: 100vh;">
      <h2>🚀 Muhammad Ayesh Portfolio API Backend</h2>
      <p style="color: #cbd5e1;">Node.js • Express • MongoDB • JWT & Cookies</p>
      <p style="color: #fbbf24;">Database mode: ${USE_DATABASE ? (isDbConnected ? 'connected' : 'enabled') : 'disabled'}</p>
      <ul>
        <li><a style="color: #38bdf8;" href="/api/health">/api/health</a></li>
        ${USE_DATABASE ? `
          <li><a style="color: #38bdf8;" href="/api/profile">/api/profile</a></li>
          <li><a style="color: #38bdf8;" href="/api/projects">/api/projects</a></li>
          <li><a style="color: #38bdf8;" href="/api/skills">/api/skills</a></li>
          <li><a style="color: #38bdf8;" href="/api/experience">/api/experience</a></li>
          <li><a style="color: #38bdf8;" href="/api/certifications">/api/certifications</a></li>
          <li><a style="color: #38bdf8;" href="/api/education">/api/education</a></li>
          <li><a style="color: #38bdf8;" href="/api/messages">/api/messages</a> (Contact Form API)</li>
          <li><a style="color: #38bdf8;" href="/api/seed">/api/seed</a></li>
        ` : '<li style="color: #cbd5e1;">Database routes are disabled. Changes stay in browser localStorage until USE_DATABASE=true.</li>'}
      </ul>
    </div>
  `);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route not found: ${req.originalUrl}`
  });
});

// Global Error Handler
app.use((err, req, res, _next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Safety process listeners
process.on('unhandledRejection', (err) => {
  console.warn('Unhandled Rejection Warning:', err?.message || err);
});
process.on('uncaughtException', (err) => {
  console.warn('Uncaught Exception Warning:', err?.message || err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
