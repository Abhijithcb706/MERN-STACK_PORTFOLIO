const Admin = require("../models/Admin");
const jwt = require('jsonwebtoken')

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const exists = await Admin.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Admin already exist" });
    }

    const admin = await Admin.create({ name, email, password });

    res
      .status(201)
      .json({ id: admin._id, name: admin.name, email: admin.email });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // 2️⃣ Compare passwords
    // (If using hashed password, use admin.matchPassword)
    if (admin.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 3️⃣ Generate JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 4️⃣ Send response
    return res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged Out" });
};
