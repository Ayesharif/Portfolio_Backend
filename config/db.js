import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
  
  mongoose.set('bufferTimeoutMS', 5000);

  mongoose.connection.on('error', (err) => {
    console.warn(`MongoDB Event Error: ${err.message}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('ℹ️ MongoDB disconnected');
  });

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host} [DB: ${conn.connection.name}]`);
  } catch (error) {
    console.warn(`⚠️ MongoDB Connection Warning: ${error.message}`);
    console.warn(`💡 Tip: If you are using MongoDB Atlas, paste your connection string into backend/.env as MONGO_URI`);
  }
};
