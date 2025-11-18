const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
  try {
    let token = null;
    if (req.cookies && req.cookies.token) token = req.cookies.token;
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return res.status(401).json({ message: 'Not authorized, token missing' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select('-password');
    if (!admin) return res.status(401).json({ message: 'Not authorized' });

    req.admin = admin;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};

module.exports = protect;