const app = require('express')();
const { v4 } = require('uuid');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;