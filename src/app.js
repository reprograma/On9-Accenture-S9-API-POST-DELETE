const express = require('express');
const app = express()

const postagens = require('./routes/postagens-routes');

app.use('/', postagens); 

app.use(express.json());

module.exports = app;