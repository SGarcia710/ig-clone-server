const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = require('../schemas/userSchema');

const Story = new Schema({
  url: String,
  user: [User],
});

module.exports = mongoose.model('Story', Story);
