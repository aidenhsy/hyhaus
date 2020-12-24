import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

export default Photo;
