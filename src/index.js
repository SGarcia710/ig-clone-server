const express = require('express');
const app = express();
const { responseSuccess } = require('./utils/responsesManager');

const controllers = require('./controllers');

const Story = require('./models/storyModel');
const Post = require('./models/postModel');

app.get('/stories', controllers.paginatedResults(Story), (req, res) => {
  res.json(responseSuccess(res.paginatedResults));
});
app.get('/posts', controllers.paginatedResults(Post), (req, res) => {
  res.json(responseSuccess(res.paginatedResults));
});

module.exports = app;
