const express = require('express');
const app = express();

const post = require('./routes/post-routes');

app.use('/', post);

app.use(express.json());

module.exports = app;