const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
router.get("/getSkills", getSkills);
router.post("/createSkill", protect, createSkill);
router.put("/editSkill/:id", protect, updateSkill);
router.delete("/deleteSkill/:id", protect, deleteSkill);

module.exports = router;
