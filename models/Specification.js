const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SpecificationSchema = new Schema({
  processor: String,
  battery: String,
  RAM: String,
  memory: String,
  dimensions: String,
  Weight: String,
  Resolution: String,
  OS: String,
  mainCamera: String,
  rearCamera: String
});

module.exports = Specification = mongoose.model(
  "specification",
  SpecificationSchema
);
