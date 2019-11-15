mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  text: {
    type: String,
    index: true
  },
  url: {
    type: String,
    required: true
  },
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "item"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Review = mongoose.model("review", ReviewSchema);
