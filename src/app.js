const express = require('express')
const app = express()

const blog = require('./routes/blogRoutes') 

app.use(express.json())

app.use('/', blog)


module.exports = app