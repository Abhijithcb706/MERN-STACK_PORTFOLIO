const Project = require("../models/Projects");

//http methods(CRUD)

exports.getProjects = async (req, res, next) => {
  try {
    const Projects = await Project.find().sort({ createdAt: -1 });
    res.json(Projects);
  } catch (error) {
    next(err);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const Project = await Project.findById(req.params.id);
    if (!Project) return res.status(404).json({ message: "Project Not Found" });
    res.json(Project);
  } catch (error) {
    next(err);
  }
};

//post method
exports.createProject = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const project = await Project.create(data);
    res.status(201).json(project);
  } catch (error) {
    console.log("error");

    next(error);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Project not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/projects/:id (protected)
exports.deleteProject = async (req, res, next) => {
  try {
    const removed = await Project.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
};
