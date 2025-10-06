const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectSmallDescription: {
      type: String,
      required: true,
    },
    projectDetailedDescription: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: false,
    },
    projectGithubLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema);
