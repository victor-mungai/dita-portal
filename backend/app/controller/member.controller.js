const memberModel = require("../models/members.model");


// Create a new member
const createMember = async (req, res) => {
  try {
    const member = await memberModel.create(req.body);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await memberModel.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get a single member
const getSingleMember = async (req, res) => {
  try {
    const member = await memberModel.findById(req.params.id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a member
const updateMember = async (req, res) => {
  try {
    const member = await memberModel.findByIdAndUpdate(req.params.id, req.body);
    if (!member) {
      res.status(404).json({ error: "Member not found" });
    }
    const updatedMember = await memberModel.findById(req.params.id);
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).send(error);
  }
};


// Delete a member
const deleteMember = async (req, res) => {
  try {
    const member = await memberModel.findByIdAndDelete(req.params.id);
    if (!member) {
      res.status(404).json({ error: "Member not found" });
    }
    const updatedMember = await memberModel.findById(req.params.id);
    if (!updatedMember) {
      res.status(200).send("Member Deleted Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
}