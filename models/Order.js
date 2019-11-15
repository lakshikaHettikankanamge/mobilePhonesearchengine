const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderScheme = new Schema({
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "item"
  },
  accessory: {
    type: mongoose.Schema.ObjectId,
    ref: "accessory"
  },
  amount: Number,
  NumberOfDays: Number,
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "user"
  }
});

module.exports = Order = mongoose.model("order", OrderScheme);
