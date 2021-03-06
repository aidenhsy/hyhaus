import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import photoRouter from './routes/photoRoutes.js';

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/photos', photoRouter);

app.listen(4000, () => {
  console.log('listening on 4000!!!!!');
});
