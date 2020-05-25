const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = require('../schemas/userSchema');
const Media = require('../schemas/mediaSchema');

const Post = new Schema({
  description: String,
  likes: Number,
  location: String,
  numberComments: Number,
  media: [Media],
  user: [User],
});

module.exports = mongoose.model('posts', Post);
