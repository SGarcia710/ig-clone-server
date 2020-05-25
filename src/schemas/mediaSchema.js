const mongoose = require('mongoose');

const { Schema } = mongoose;

const Media = new Schema({
  type: String,
  url: String,
});

module.exports = Media;
