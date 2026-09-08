import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'Muhammad Ayesh'
    },
    title: {
      type: String,
      required: true,
      default: 'MERN Stack Developer'
    },
    tagline: {
      type: String,
      default: 'Building scalable web applications, robust backend architectures, and dynamic interactive user experiences.'
    },
    bio: {
      type: String,
      default: 'Passionate and detail-oriented MERN Stack Developer with extensive expertise in developing responsive, high-performance web applications.'
    },
    avatar: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: 'ayesharif@gmail.com'
    },
    phone: {
      type: String,
      default: '+92 300 1234567'
    },
    location: {
      type: String,
      default: 'Lahore, Pakistan'
    },
    availability: {
      type: String,
      default: 'Available for Full-time & Freelance Projects'
    },
    resumeUrl: {
      type: String,
      default: '#'
    },
    socials: {
      github: { type: String, default: 'https://github.com/Ayesharif' },
      linkedin: { type: String, default: 'https://www.linkedin.com/in/muhammad-ayesh-88b072248/' },
      email: { type: String, default: 'mailto:ayesharif@gmail.com' },
      twitter: { type: String, default: '' }
    },
    stats: [
      {
        id: Number,
        label: String,
        value: String
      }
    ]
  },
  { timestamps: true }
);

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
