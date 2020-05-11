const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cart = require("../../model/CartModels/Cart");
const multer = require("multer");
const Product = require("../../model/product/");
const nodeMailer = require("nodemailer");
const texts = require("../../constants/texts");
const emailCongig = texts.emailConfigure;

exports.addOrder = (req, res, next) => {
  const { body } = req;

  const { UserID, CartItems } = body;

  Car;
  t.find({
    UserID,
  })
    .exec()
    .then((cart) => {
      if (cart.length >= 1) {
        return res.json({
          message: "Cart Entry for the user is already existing",
        });
      } else {
        const newCartEntry = new Cart();
        newCartEntry.userID = UserID;
        newCartEntry.CartItems = CartItems;

        newCartEntry
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Cart entry successfully created",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};

exports.getAllCartEntries = (req, res) => {
  Cart.find((err, manager) => {
    if (err) {
      console.log(err);
    } else {
      res.json(manager);
    }
  });
};

exports.getCartEntry = (req, res) => {
  let userid = req.params.id;
  Cart.findById(userid)
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.editCartEntry = (req, res) => {
  const { body } = req;
  const { UserID, CartItems } = body;

  Cart.findById(req.params.id, (err, cart) => {
    if (!cart) res.status(404).send("Cart Entry data is not found");
    else {
      cart.CartItems = CartItems;
      cart
        .save()
        .then((cart) => {
          res.json("cart edited Successfully");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

exports.deleteCartEntry = (req, res, next) => {
  Cart.remove({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Cart entry deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
