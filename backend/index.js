const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config();
const PORT = 3000;
const MONGODB = process.env.MONGODB_URL;

app.get("/", function (req, res) {
  res.send("test..");
});

// login
app.post("/login", function (req, res) {
  try {
    const { userName, password } = req.body;

    //Validate input
    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    res.send("successfully login");
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "can't login, Internal server error" });
  }
});

app.listen(PORT, function () {
  console.log(`Backend Running on ${PORT}..`);
});
