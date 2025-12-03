const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.get("/getAllProjects", getProjects);
router.get("/getProject/:id", getProject);

router.post("/createProject", protect, createProject);
router.put("/editProject/:id", protect, updateProject);
router.delete("/deleteProject/:id", protect, deleteProject);
module.exports = router;
