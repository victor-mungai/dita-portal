const hackathonModel = require("../models/hackathon.model");


// Create a new hackathon
const createhackathon = async (req, res) => {
  try {
    const hackathon = await hackathonModel.create(req.body);
    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all hackathons
const getAllhackathons = async (req, res) => {
  try {
    const hackathons = await hackathonModel.find();
    res.status(200).json(hackathons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get a single hackathon
const getSinglehackathon = async (req, res) => {
  try {
    const hackathon = await hackathonModel.findById(req.params.id);
    res.status(200).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a hackathon
const updatehackathon = async (req, res) => {
  try {
    const hackathon = await hackathonModel.findByIdAndUpdate(req.params.id, req.body);
    if (!hackathon) {
      res.status(404).json({ error: "hackathon not found" });
    }
    const updatedhackathon = await hackathonModel.findById(req.params.id);
    res.status(200).json(updatedhackathon);
  } catch (error) {
    res.status(500).send(error);
  }
};


// Delete a hackathon
const deletehackathon = async (req, res) => {
  try {
    const hackathon = await hackathonModel.findByIdAndDelete(req.params.id);
    if (!hackathon) {
      res.status(404).json({ error: "hackathon not found" });
    }
    const updatedhackathon = await hackathonModel.findById(req.params.id);
    if (!updatedhackathon) {
      res.status(200).send("hackathon Deleted Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  createhackathon,
  getAllhackathons,
  getSinglehackathon,
  updatehackathon,
  deletehackathon,
}