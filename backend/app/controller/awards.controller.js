const awardsModel = require("../models/awards.model");


// Create a new hackathon
const createawards = async (req, res) => {
  try {
    const awards = await awardsModel.create(req.body);
    res.status(200).json(awards);
  } catch (error) {
    console.error("Error creating awards:", error);  // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
};


// Get all awardss
const getAllawardss = async (req, res) => {
  try {
    const awards = await awardsModel.find();
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get a single awards
const getSingleawards = async (req, res) => {
  try {
    const awards = await awardsModel.findById(req.params.id);
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a awards
const updateawards = async (req, res) => {
  try {
    const awards = await awardsModel.findByIdAndUpdate(req.params.id, req.body);
    if (!awards) {
      res.status(404).json({ error: "awards not found" });
    }
    const updatedawards = await awardsModel.findById(req.params.id);
    res.status(200).json(updatedawards);
  } catch (error) {
    res.status(500).send(error);
  }
};


// Delete a awards
const deleteawards = async (req, res) => {
  try {
    const awards = await awardsModel.findByIdAndDelete(req.params.id);
    if (!awards) {
      res.status(404).json({ error: "awards not found" });
    }
    const updatedawards = await awardsModel.findById(req.params.id);
    if (!updatedawards) {
      res.status(200).send("awards Deleted Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  createawards,
  getAllawardss,
  getSingleawards,
  updateawards,
  deleteawards,
}