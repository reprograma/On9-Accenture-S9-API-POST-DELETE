const express = require("express");
const app = express();
const cors = require("cors");

const posts = require("./routes/posts-routes");

app.use(cors());
app.use(express.json());
app.use("/", posts);

module.exports = app;
