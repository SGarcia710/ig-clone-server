const mongoose = require('mongoose');

const startConnection = async () => {
  try {
    const db = await mongoose.connect(
      'mongodb+srv://admin:admin@instagramclone-llnih.mongodb.net/igclonedb?retryWrites=true&w=majority',
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
  } catch (error) {
    console.log('DB>>', error);
  }
};

module.exports = { startConnection };
