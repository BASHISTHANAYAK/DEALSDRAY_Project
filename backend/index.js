const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
const PORT = 3000;
const MONGODB = process.env.MONGODB_URL;


app.get("/", function (req, res) {
  res.send("Home");
});

app.listen(PORT, function () {
  console.log(`Backend Running on ${PORT}..`);
});
