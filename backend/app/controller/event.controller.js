const eventsModel = require("../models/events.model");

// Create an event
const createEvent = async (req, res) => {
  try {
    const events = await eventsModel.create(req.body);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await eventsModel.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an event
const getSingleEvent = async (req, res) => {
  try {
    const events = await eventsModel.findById(req.params.id);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const events = await eventsModel.findByIdAndUpdate(req.params.id, req.body);
    if (!events) {
      res.status(404).json({ error: "Event not found" });
    }
    const updatedEvents = await eventsModel.findById(req.params.id);
    res.status(200).json(updatedEvents);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const events = await eventsModel.findByIdAndDelete(req.params.id);
    if (!events) {
      res.status(404).json({ error: "Event not found" });
    }
    const updatedEvents = await eventsModel.findById(req.params.id);
    if (!updatedEvents) {
      res.status(200).send("Event Deleted Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
