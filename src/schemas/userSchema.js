const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  userName: String,
  pictureUrl: String,
});

module.exports = User;
