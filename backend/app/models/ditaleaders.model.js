const mongoose = require("mongoose");

const ditaLeadersSchema = mongoose.Schema(
  {
    leaderName: {
      type: String,
      required: true,
    },
    leaderRole: {
      type: String,
      required: true,
    },
    leaderImage: {
      type: String,
      required: true,
    },
    leaderDescription: {
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
    } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("DitaLeaders", ditaLeadersSchema);
