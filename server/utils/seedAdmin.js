const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const Admin = require('../models/Admin');

connectDB();

const seed = async () => {
  try {
    const exists = await Admin.findOne({ email: 'admin@youremail.com' });
    if (!exists) {
      const admin = await Admin.create({ name: 'Admin', email: 'admin@youremail.com', password: 'Password123' });
      console.log('Seeded admin:', admin.email,admin.password,admin.name);
    } else {
      console.log('Admin exists');
    }
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
