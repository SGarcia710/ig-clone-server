const express = require('express');
const bodyParser = require('body-parser');
const apiApp = require('./src');
const db = require('./src/db');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server status: ok!');
});

app.use('/static', express.static('static'));

app.use('/api', apiApp);

const startServer = async () => {
  try {
    await db.startConnection();
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

startServer();
