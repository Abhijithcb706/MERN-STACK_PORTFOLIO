const mongoose = require("mongoose");

const expSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String },
    description: { type: String },
    isPresent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", expSchema);
