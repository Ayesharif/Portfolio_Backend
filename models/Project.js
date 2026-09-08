import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true
    },
    category: {
      type: String,
      enum: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'Other'],
      default: 'Full Stack'
    },
    featured: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      required: [true, 'Project description is required']
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
    },
    images: [
      {
        type: String
      }
    ],
    tags: [
      {
        type: String
      }
    ],
    liveUrl: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
