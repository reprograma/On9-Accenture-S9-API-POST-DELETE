const express = require ("express");
const app = express();

const postagem = require("./routes/postagensRoutes");
const { use } = require("./routes/postagensRoutes");
//const { post } = require("./routes/postagensRoutes");

app.use(express.json());

app.use("/", postagem);

module.exports = app;
