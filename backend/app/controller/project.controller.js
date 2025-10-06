const projectsModel = require("../models/projects.model");

// Create a project
const createProject = async (req, res) => {
  try {
    const projects = await projectsModel.create(req.body);
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error creating awards:", error);  // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await projectsModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a project
const getSingleProject = async (req, res) => {
  try {
    const projects = await projectsModel.findById(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const projects = await projectsModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!projects) {
      res.status(404).json({ message: "Project not found" });
    }
    const updatedProjects = await projectsModel.findById(req.params.id);
    res.status(200).json(updatedProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const projects = await projectsModel.findByIdAndDelete(req.params.id);
    if (!projects) {
      res.status(404).json({ message: "Project not found" });
    }
    const updatedProjects = await projectsModel.findById(req.params.id);
    if (!updatedProjects) {
      res.status(200).json({ message: "Project deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
