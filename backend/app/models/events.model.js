const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventTime: {
      type: String,
      required: true,
    },
    eventVenue: {
      type: String,
      required: true,
    },
    eventSmallDescription: {
      type: String,
      required: true,
    },
    eventDetailedDescription: {
      type: String,
      required: true,
    },
    eventImage: {
      type: String,
      required: true,
    },
    registrationDetail: {
      type: String,
      required: false,
    },
    eventLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", eventSchema);
