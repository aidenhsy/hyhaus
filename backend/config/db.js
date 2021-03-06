import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

const connectDB = asyncHandler(async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log(`connected to ${conn.connection.host}`);
});

export default connectDB;
