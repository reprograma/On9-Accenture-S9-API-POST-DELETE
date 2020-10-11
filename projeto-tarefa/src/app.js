const express = require('express');
const app = express();

const tarefas = require('./routes/tarefas-routes');

app.use(express.json());
app.use('/', tarefas);

module.exports = app;

