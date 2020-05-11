const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Order = require("../../model/CartModels/Order");
const multer = require("multer");
// const Product = require("../../model/product/");
const nodeMailer = require("nodemailer");
const texts = require("../../constants/texts");
const emailCongig = texts.emailConfigure;

exports.addOrder = (req, res, next) => {
  const { body } = req;

  const { UserID,
    OrderID,
    OrderItems,
    TotalPrice,
    PlacedDate,
    PaymentType,
    Address } = body;

  Order.find({
    OrderID,
  })
    .exec()
    .then((order) => {
      if (order.length >= 1) {
        return res.json({
          message: "Order Entry for the orderID is existing already",
        });
      } else {
        const newOrderEntry = new Order();
        newOrderEntry.OrderID = OrderID;
        newOrderEntry.UserID = UserID;
        newOrderEntry.OrderItems = OrderItems;
        newOrderEntry.TotalPrice = TotalPrice;
        newOrderEntry.PlacedDate = PlacedDate;
        newOrderEntry.PaymentType = PaymentType;
        newOrderEntry.Address = Address;

        newOrderEntry
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Order entry successfully created",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};



exports.getAllOrderEntries = (req, res) => {
  Order.find((err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.json(order);
    }
  });
};

// exports.getCartEntry = (req, res) => {
//   let userid = req.params.id;
//   Cart.findById(userid)
//     .then((cart) => res.json(cart))
//     .catch((err) => res.status(400).json("Error: " + err));
// };

// exports.editCartEntry = (req, res) => {
//   const { body } = req;
//   const { UserID, CartItems } = body;

//   Cart.findById(req.params.id, (err, cart) => {
//     if (!cart) res.status(404).send("Cart Entry data is not found");
//     else {
//       cart.CartItems = CartItems;
//       cart
//         .save()
//         .then((cart) => {
//           res.json("cart edited Successfully");
//         })
//         .catch((err) => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// };

// exports.deleteCartEntry = (req, res, next) => {
//   Cart.remove({ _id: req.params.id })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: "Cart entry deleted",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// };
