const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  createContact,
  getMessages,
} = require("../controllers/contactControllers");

router.post("/createContact", createContact);
router.get("/getMessage", protect, getMessages);

module.exports = router;
