const express = require("express");
const router = express.Router();

//Item Model
const Store = require("../../models/Store");

//@route POST api/items
//@Create an item
//@access private
// router.post("/", (req, res) => {
//   const newStore = new Store({
//     name: req.body.name
//   });

//   newStore.save().then(store => res.json(store));
// });

router.post("/",(req,res)=>{
  res.send('register')
})

module.exports = router;
