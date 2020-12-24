import dotenv from 'dotenv';
import Photo from '../models/Photo.js';
import asyncHandler from 'express-async-handler';
import connectDB from '../config/db.js';
import { photos } from './data.js';

dotenv.config();
connectDB();

const importData = asyncHandler(async () => {
  await Photo.deleteMany();
  await Photo.insertMany(photos);

  console.log('data imported');
  process.exit(0);
});

const removeData = asyncHandler(async () => {
  await Photo.deleteMany();

  console.log('data deleted');
  process.exit(0);
});

if (process.argv[2] === '-d') {
  removeData();
} else {
  importData();
}
