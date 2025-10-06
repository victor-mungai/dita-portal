const ditaLeadersModel = require("../models/ditaleaders.model");

// Create a new Dita Leader
const createDitaLeader = async (req, res) => {
  try {
    const ditaLeader = await ditaLeadersModel.create(req.body);
    res.status(200).json(ditaLeader);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Dita Leaders
const getAllDitaLeaders = async (req, res) => {
  try {
    const ditaLeaders = await ditaLeadersModel.find();
    res.status(200).json(ditaLeaders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Dita Leader
const getSingleDitaLeader = async (req, res) => {
  try {
    const ditaLeader = await ditaLeadersModel.findById(req.params.id);
    res.status(200).json(ditaLeader);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Dita Leader
const updateDitaLeader = async (req, res) => {
  try {
    const ditaLeader = await ditaLeadersModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!ditaLeader) {
      res.status(404).json({ message: "Dita Leader not found" });
    }
    const updatedDitaLeader = await ditaLeadersModel.findById(req.params.id);
    res.status(200).json(updatedDitaLeader);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Dita Leader
const deleteDitaLeader = async (req, res) => {
  try {
    const ditaLeader = await ditaLeadersModel.findByIdAndDelete(req.params.id);
    if (!ditaLeader) {
      res.status(200).json({ message: "Dita Leader deleted successfully" });
    }
    {
      res.status(500).json({ message: "Dita Leader was not deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDitaLeader,
  getAllDitaLeaders,
  getSingleDitaLeader,
  updateDitaLeader,
  deleteDitaLeader,
};