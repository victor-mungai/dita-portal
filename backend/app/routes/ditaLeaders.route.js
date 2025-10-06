const express = require("express");
const router = express.Router();

const {
  createDitaLeader,
  getAllDitaLeaders,
  getSingleDitaLeader,
  updateDitaLeader,
  deleteDitaLeader,
} = require("../controller/ditaLeaders.controller");

// Create a new Dita Leader
router.post("/", createDitaLeader);

// Get all Dita Leaders
router.get("/", getAllDitaLeaders);

// Get a single Dita Leader
router.get("/:id", getSingleDitaLeader);

// Update a Dita Leader
router.put("/:id", updateDitaLeader);

// Delete a Dita Leader
router.delete("/:id", deleteDitaLeader);

module.exports = router;