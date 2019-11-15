const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Item Model
const Item = require("../../models/Item");

//@route GET api/items
//@Get All items
//@access public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@route POST api/items
//@Create an item
//@access public
router.post("/", (req, res) => {
  // const newItem = new Item({
  //   brand: req.body.brand,
  //   model:req.body.model,

  // });

  const {
    brand,
    modal,
    imageURL,
    tot_Rating,
    price,
    pricesOfStores,
    ratings
  } = req.body;

  if (!brand || !modal) {
    return res.status(400).json({ msg: "enter all fields" });
  } else {
    const newItem = new Item({
      brand,
      modal
    });
    newItem.save().then(item => res.json(item));
  }
});

//@route DELETE api/items:id
//@delete an item
//@access private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
