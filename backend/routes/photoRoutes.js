import express from 'express';
import asyncHandler from 'express-async-handler';
import Photo from '../models/Photo.js';

const router = express.Router();

const sample = [
  {
    name: 'name1',
  },
  {
    name: 'name2',
  },
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const photos = await Photo.find();
    res.json(photos);
  })
);

export default router;
