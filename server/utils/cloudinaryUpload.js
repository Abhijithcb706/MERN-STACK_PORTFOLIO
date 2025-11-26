const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (fileURLToPath, folder = "portfolio") => {
  try {
    const res = await cloudinary.uploader.upload(fileURLToPath, { folder });

    fs.unlinkSync(filePath);
    return res.secure_url;
  } catch (err) {
    if (fs.existsSync('../uploads')) fs.unlinkSync(filePath);
    throw err;
  }
};

module.exports = uploadToCloudinary;
