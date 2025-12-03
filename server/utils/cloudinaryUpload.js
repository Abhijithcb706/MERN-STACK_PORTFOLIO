

const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (filePath, folder = "portfolio") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder });

    // delete local file after upload
    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (err) {
    // remove file if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw err;
  }
};

module.exports = uploadToCloudinary;

