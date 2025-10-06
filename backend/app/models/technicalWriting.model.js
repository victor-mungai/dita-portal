const mongoose = require("mongoose");

const technicalWritingSchema = mongoose.Schema(
  {
    writerName: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    Blog: {
      type: String,
      required: true,
    },  
    writerImage: {
      type: String,
      required: true,
    },
    writerGithub: {
      type: String,
      required: true,
    },
    writerLinkedin: {
      type: String,
      required: true,
    },
    topicImage: 
    {
      type: String,
      required: true,
    },
    blogTeaser:
    {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TechnicalWriting", technicalWritingSchema);
