const express = require('express');
const app = express();

const posts = require('./routes/posts-routes');

app.use(express.json());

app.use('/', posts);

module.exports = app;