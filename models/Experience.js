import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, 'Role/position is required'],
      trim: true
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    location: {
      type: String,
      default: 'Remote'
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
      default: '2023 - Present'
    },
    type: {
      type: String,
      default: 'Full-Time'
    },
    description: {
      type: String,
      default: ''
    },
    achievements: [
      {
        type: String
      }
    ],
    technologies: [
      {
        type: String
      }
    ],
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
