const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cart = new Schema(
  {
    UserID: {
      type: String,
      required: true
    },
    CartItems: {
      type: [
        {
          DressCode: String,
          DressType: String,
          DressPrice: Number,
          Size: String,
          Quantity: Number,
          Discount: Number,
          DressImage: String,
          ProductId: String
        }
      ]
    },
    TotalItems: { type: Number },
    TotalPrice: { type: Number }
  },
  {
    collection: "Carts",
  }
);

module.exports = mongoose.model("Carts", Cart);
