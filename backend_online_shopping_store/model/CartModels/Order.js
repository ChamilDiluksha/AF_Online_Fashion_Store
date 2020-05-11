const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Order = new Schema(
  {
    OrderID: {
      type: String,
      required: true,
    },

    UserID: {
      type: String,
      required: true,
    },

    OrderItems: {
      type: [
        {
          DressCode: String,
          DressType: String,
          DressPrice: Number,
          Size: String,
          Quantity: Number,
          Discount: Number,
          Image: String,
          DressImage: String,
          ProductId: String
        },
      ],
    },

    TotalPrice: {
      type: Number,
      required: true,
    },

    PlacedDate: {
      type: Date,
      required: true,
    },
    PaymentType: {
      type: String
    },
    Address: {
      type: String
    },
  },

  {
    collection: "Order",
  }
);

module.exports = mongoose.model("Order", Order);
