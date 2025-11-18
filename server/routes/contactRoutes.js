const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

const {
  createContact,
  getMessages,
} = require("../controllers/contactControllers");

router.post("/", createContact);
router.get("/", protect, getMessages);

module.exports = router;
