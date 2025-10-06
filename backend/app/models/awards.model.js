const mongoose = require("mongoose");

const awardsSchema = mongoose.Schema(
  {
    awardsName: {
      type: String,
      required: true,
    },
    awardsDate: {
      type: String,
      required: true,
    },
    awardsDescription: {
      type: String,
      required: true,
    },
    awardsImage: {
      type: String,
      required: true,
    }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Awards", awardsSchema);
