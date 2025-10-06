const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/technicalWriting.controller");

// Create a new blog
router.post("/", createBlog);

// Get all blogs
router.get("/", getAllBlogs);

// Get a single blog
router.get("/:id", getSingleBlog);

// Update a blog
router.put("/:id", updateBlog);

// Delete a blog
router.delete("/:id", deleteBlog);

module.exports = router;