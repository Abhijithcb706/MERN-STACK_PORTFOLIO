const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      //frontend/backend/tool
      type: String,
    },
    level: {
      //beginner/intermdeiate/professional
      type: String,
    },
    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill',skillSchema)