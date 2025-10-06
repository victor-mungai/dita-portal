const express = require("express");
const router = express.Router();
const {
  createhackathon,
  getAllhackathons,
  getSinglehackathon,
  updatehackathon,
  deletehackathon,
} = require("../controller/hackathon.controller");

// Create a new hackathon
router.post("/", createhackathon);

// Get all hackathons
router.get("/", getAllhackathons);

// Get a single hackathon
router.get("/:id", getSinglehackathon);

// Update a hackathon
router.put("/:id", updatehackathon);

// Delete a hackathon
router.delete("/:id", deletehackathon);

module.exports = router;