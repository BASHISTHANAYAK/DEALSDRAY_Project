const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username or password is empty or just spaces
    if (
      !username ||
      !password ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      return res.status(400).json({ message: "Please fill in all details" });
    }

    console.log("registering admin -", { username, password });

    const admin = new Admin({ username, password });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering admin, please try again", error });
  }
};

// for admin login
exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username or password is empty or just spaces
    if (
      !username ||
      !password ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      return res.status(400).json({ message: "Please fill in all details" });
    }

    console.log("login -", { username, password });

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
