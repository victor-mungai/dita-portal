const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controller/event.controller");

// Create an event
router.post("/", createEvent);

// Get all events
router.get("/", getAllEvents);

// Get an event
router.get("/:id", getSingleEvent);

// Update an event
router.put("/:id", updateEvent);

// Delete an event
router.delete("/:id", deleteEvent);

module.exports = router;
