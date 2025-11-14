const Admin = require("../models/Admin");

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
    const admin = await Admin.findOne({ email });
    res.json(admin);
    // if (admin && (await admin.matchPassword(password))) {
    // }
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged Out" });
};
