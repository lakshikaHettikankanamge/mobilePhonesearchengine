mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessorySchema = new Schema({
  name: {
    type:String,
    unique:true},
  imageURL: String,
  price: Number,
  pricesOfStores: [
    {
      price: Number,
      store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "store"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Accessory = mongoose.model("accessory", AccessorySchema);
