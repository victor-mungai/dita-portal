const express = require("express");
const router = express.Router();
const {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
} = require("../controller/member.controller");

// Create a new member
router.post("/", createMember);

// Get all members
router.get("/", getAllMembers);

// Get a single member
router.get("/:id", getSingleMember);

// Update a member
router.put("/:id", updateMember);

// Delete a member
router.delete("/:id", deleteMember);

module.exports = router;