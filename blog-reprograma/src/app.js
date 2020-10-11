const express = require("express");
const app = express(); //vamos chamar a execução do express de app

const posts = require("./routes/posts-routes");

app.use(express.json());

app.use('/', posts);

module.exports = app;