const express = require("express");
const app = express();
const cors = require("cors");

const tarefas = require("./routes/tarefas-routes");

app.use("/", tarefas);
app.use(express.json());
app.use(cors());

module.exports = app;
