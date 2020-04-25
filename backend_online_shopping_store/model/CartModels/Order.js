const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Order = new Schema(
  {
    _id: {
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
          Quantity: Number,
          Discount: Number,
          Image: { data: Buffer, contentType: String },
        },
      ],
    },

    TotalPrice: {
      type: Number,
      required: true,
    },

    PlacedDate: {
      type: Date,
    },
  },

  {
    collection: "Order",
  }
);

module.exports = mongoose.model("Order", Order);