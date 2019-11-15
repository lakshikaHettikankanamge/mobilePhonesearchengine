mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String
  },
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "item"
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.ObjectId, ref: "user" }
    }
  ],
  postedBy: { type: mongoose.Schema.ObjectId, ref: "user" },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
