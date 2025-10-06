const mongoose = require("mongoose");

const hackathonSchema = mongoose.Schema(
  {
    hackathonName: {
      type: String,
      required: true,
    },
    hackathonDate: {
      type: String,
      required: true,
    },
    hackathonDescription: {
      type: String,
      required: true,
    },
    hackathonImage: {
      type: String,
      required: true,
    }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hackathons", hackathonSchema);
