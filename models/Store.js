mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  address: String,
  email: String,
  phone: String,
  descripton: String,
  products: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "item"
      },
      price: Number
    }
  ]
});

module.exports = Store = mongoose.model("store", StoreSchema);
