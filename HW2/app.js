const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('In /users middleware function');
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In / middleware function');
  res.send('<h1>Basic Page</h1>');
});

app.listen(3000);