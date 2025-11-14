const Experience = require("../models/Experience");

exports.getExperience = async (req, res, next) => {
  try {
    const items = await Experience.find().sort({ from: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.createExperience = async (req, res, next) => {
  try {
    const items = await Experience.create(req.body);
    res.status(201).json(items);
  } catch (err) {
    next(err);
  }
};

exports.updateExperience = async (req, res, next) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(exp);
  } catch (err) {
    next(err);
  }
};

exports.deleteExperience = async (req, res, next) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "Experience Deleted" });
  } catch (err) {
    next(err);
  }
};
