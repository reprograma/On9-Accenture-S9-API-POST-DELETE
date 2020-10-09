const express = require('express')
const app = express()

const blog = require('./routes/blogRepRouters')

app.use(express.json());

app.use('/', blog)

module.exports = app