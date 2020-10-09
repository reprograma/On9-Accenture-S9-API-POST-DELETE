const router = require('../src/routes/postagensRoutes');
const express = require('express');

const app = express();

app.use(express.json());

app.use('/postagens', router);

module.exports = app;