const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Item Model
const Comment = require("../../models/Comment");

// @route POST api/comments
// @Create a comment
// @access private
// router.post("/",auth, (req, res) => {
//   const newComment = new Store({
//     text: req.body.name,

//   });

//   newStore.save().then(store => res.json(store));
// });

router.post("/", (req, res) => {
  res.send("comments");
});

module.exports = router;
