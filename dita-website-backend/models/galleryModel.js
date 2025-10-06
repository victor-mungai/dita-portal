const mongoose = require('mongoose');
const gallerySchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Gallery', gallerySchema);