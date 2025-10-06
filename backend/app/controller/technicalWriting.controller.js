const technicalWritingModel = require("../models/technicalWriting.model");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const technicalWriting = await technicalWritingModel.create(req.body);
    res.status(200).json(technicalWriting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const technicalWriting = await technicalWritingModel.find();
    res.status(200).json(technicalWriting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single blog
const getSingleBlog = async (req, res) => {
  try {
    const technicalWriting = await technicalWritingModel.findById(req.params.id);
    res.status(200).json(technicalWriting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const technicalWriting = await technicalWritingModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    const updatedBlog = await technicalWritingModel.findById(req.params.id);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const technicalWriting = await technicalWritingModel.findByIdAndDelete(
      req.params.id
    );
    if (!technicalWriting) {
      res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}