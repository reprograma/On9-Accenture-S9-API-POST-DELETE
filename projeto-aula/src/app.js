const express = require("express");
const app = express();

const agenda = require("./routes/agenda-routes");

app.use(express.json());

app.use("/", agenda);

module.exports = app;
