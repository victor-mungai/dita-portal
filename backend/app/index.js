const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

// Import routers
const eventRouter = require("./routes/events.route");
const projectRouter = require("./routes/projects.route");
const memberRouter = require("./routes/members.routes");
const ditaLeaderRouter = require("./routes/ditaLeaders.route");
const technicalWritingRouter = require("./routes/technicalWriting.route");
const hackathonRouter = require("./routes/hackathon.route");
const awardsRouter = require("./routes/awards.route");

const PORT = process.env.PORT || 3001;

// CORS configuration
app.use(cors({
  origin: '*',  // Adjust if needed
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

// Increase request size limits to avoid 413 errors
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// Serve static images so the frontend can access them
app.use("/uploads", express.static(path.join(__dirname, "Images")));
console.log("Serving static files from:", path.join(__dirname, "Images"));


app.use("/events", eventRouter);
app.use("/projects", projectRouter);
app.use("/members", memberRouter);
app.use("/ditaleaders", ditaLeaderRouter);
app.use("/technicalWritings", technicalWritingRouter);
app.use("/hackathons", hackathonRouter);
app.use("/awards", awardsRouter);






// Ensure the folder exists before using it
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Function to create storage for different image types
const createStorage = (folderName) => {
  const uploadPath = path.join(__dirname, "Images", folderName);
  ensureDirectoryExists(uploadPath);

  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
};

// Define upload handlers
const uploadConfigs = {
  events: multer({ storage: createStorage("Events") }),
  members: multer({ storage: createStorage("Members") }),
  projects: multer({ storage: createStorage("Projects") }),
  writerImage: multer({ storage: createStorage("WriterImage") }),
  topicImage: multer({ storage: createStorage("TopicImage") }),
  leaders: multer({ storage: createStorage("DitaLeaders") }),
  hackathon: multer({ storage: createStorage("Hackathon") }),
  awards: multer({ storage: createStorage("Awards") }),
};

// Upload routes with full image URLs
const createUploadRoute = (uploadPath, upload) => {
  app.post(uploadPath, upload.single("image"), (req, res) => {
    console.log("File received:", req.file);
    if (!req.file) {
      return res.status(400).json({ status: "No file uploaded" });
    }

    // Extract the folder name from the uploadPath
    const folderName = uploadPath.split("/").pop(); // 'members', 'projects', etc.

    // Create the correct image URL
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${folderName}/${req.file.filename}`;

    console.log("Image URL:", imageUrl);  // Log the URL to verify
    res.setHeader('Content-Type', 'application/json');
    res.json({ status: "success", image: imageUrl });
  });
};


// Create upload endpoints
createUploadRoute("/upload-image/Events", uploadConfigs.events);
createUploadRoute("/upload-image/Members", uploadConfigs.members);
createUploadRoute("/upload-image/Projects", uploadConfigs.projects);
createUploadRoute("/upload-image/WriterImage", uploadConfigs.writerImage);
createUploadRoute("/upload-image/TopicImage", uploadConfigs.topicImage);
createUploadRoute("/upload-image/DitaLeaders", uploadConfigs.leaders);
createUploadRoute("/upload-image/Hackathon", uploadConfigs.hackathon);
createUploadRoute("/upload-image/Awards", uploadConfigs.awards);



// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb://mongo:27017/Dita-Website-Backend"
  )
  .then(() => {
    console.log("Connected to the database successfully!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`Failed to connect to the database. Error: ${error.message}`);
  });
