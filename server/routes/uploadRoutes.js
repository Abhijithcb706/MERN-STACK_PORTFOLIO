const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadToCloudinary = require("../utils/cloudinaryUpload");
const protect = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post(
  "/image",
  protect,
  upload.single("image"),
  async (req, res, next) => {
    try {
      if (!req.file) return res.status(400).json({ message: "No file" });
      const url = await uploadToCloudinary(req.file.path, "portfolio_projects");
      res.json({ url });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
