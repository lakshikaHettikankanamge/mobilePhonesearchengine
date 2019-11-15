const express = require("express");
const router = express.Router();

//Review Model
const Review = require("../../models/Review");

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
  res.send("reviews");
});

module.exports = router;
