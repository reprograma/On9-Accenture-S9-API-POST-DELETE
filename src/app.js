const express = require('express');             //requerendo o express
const app = express();

const postagens = require('./routes/postagem-routes')           

app.use(express.json());
app.use("/", postagens);

module.exports = app;