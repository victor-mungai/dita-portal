const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    memberName: {
      type: String,
      required: true,
    },
    memberRole: {
      type: String,
      required: true,
    },
    memberDescription: {
      type: String,
      required: true,
    },
    memberImage: {
      type: String,
      required: true,
    },  
    githubLink: {
      type: String,
      required: true,
    },
    linkedinLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Members", memberSchema);
