const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controller/project.controller");

// Create a project
router.post("/", createProject);

// Get all projects
router.get("/", getAllProjects);

// Get a project
router.get("/:id", getSingleProject);

// Update a project
router.put("/:id", updateProject);

// Delete a project
router.delete("/:id", deleteProject);

module.exports = router;