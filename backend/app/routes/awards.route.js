const express = require("express");
const router = express.Router();
const {
  createawards,
  getAllawardss,
  getSingleawards,
  updateawards,
  deleteawards,
} = require("../controller/awards.controller");

// Create a new awards
router.post("/", createawards);

// Get all awardss
router.get("/", getAllawardss);

// Get a single awards
router.get("/:id", getSingleawards);

// Update a awards
router.put("/:id", updateawards);

// Delete a awards
router.delete("/:id", deleteawards);

module.exports = router;