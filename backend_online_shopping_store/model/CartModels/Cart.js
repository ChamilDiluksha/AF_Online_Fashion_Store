const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cart = new Schema(
  {
    UserID: {
      type: String,
      required: true,
    },
    CartItems: [
      {
        DressCode: String,
        DressType: String,
        DressPrice: Number,
        Quantity: Number,
        Discount: Number,
        Image: { data: Buffer, contentType: String },
      },
    ],
  },
  {
    collection: "Cart",
  }
);

module.exports = mongoose.model("Cart", Cart);
