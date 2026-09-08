import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, 'Degree name is required'],
      trim: true
    },
    institution: {
      type: String,
      required: [true, 'Institution name is required'],
      trim: true
    },
    location: {
      type: String,
      default: 'Lahore, Pakistan'
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
      default: '2020 - 2024'
    },
    grade: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    highlights: [
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

const Education = mongoose.model('Education', educationSchema);
export default Education;
