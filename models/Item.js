mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  brand: String,
  model: String,
  imageURL: String,
  tot_rating: Number,
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
  ratings: [
    {
      numberOfStars: Number,
      rated_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
