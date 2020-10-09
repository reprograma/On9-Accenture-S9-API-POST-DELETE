const express = require('express')
const app = express()

const postagem = require('./routes/blog-routes')

app.use(express.json());

app.use('/', postagem)

module.exports = app