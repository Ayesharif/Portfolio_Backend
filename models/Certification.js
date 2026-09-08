import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Certification title is required'],
      trim: true
    },
    issuer: {
      type: String,
      required: [true, 'Issuer name is required'],
      trim: true
    },
    date: {
      type: String,
      default: () => new Date().getFullYear().toString()
    },
    credentialUrl: {
      type: String,
      default: ''
    },
    credentialId: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    images: [
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

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;
