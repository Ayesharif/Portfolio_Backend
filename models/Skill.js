import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true
    },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Database', 'DevOps & Tools', 'Other'],
      default: 'Frontend'
    },
    level: {
      type: Number,
      min: 1,
      max: 100,
      default: 85
    },
    icon: {
      type: String,
      default: 'Code2'
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
