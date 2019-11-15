const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Accessory Model
const Comment = require("../../models/Accessory");

// @route POST api/accessories
// @Create an accessory
// @access public
router.post("/", (req, res) => {
  res.send("comments");
});

module.exports = router;
