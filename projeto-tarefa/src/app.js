const express = require('express');
const app = express();

const tarefas = require('./routes/tarefas-routes');

app.use(express.json());

// app.use(function (req, res, next) {
//   req.headers['content-type'] = 'application/json';
//   next();
// });

// app.use(function (request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*")
//   response.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   )
//   next()
// })

app.use('/', tarefas);

module.exports = app;

