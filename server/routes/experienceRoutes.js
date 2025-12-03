const express = require("express");
const router = express.Router();

const {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController");
const protect = require("../middlewares/authMiddleware");



router.get("/getExperience", getExperience);

router.post("/createExperience",protect, createExperience);
router.put("/editExperience/:id",protect, updateExperience);
router.delete("/deleteExperience/:id",protect, deleteExperience);
module.exports=router
