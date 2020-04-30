const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cart = require("../../model/CartModels/Cart");
// const Product = require("../../model/product/");
const nodeMailer = require("nodemailer");
const texts = require("../../constants/texts");
const emailCongig = texts.emailConfigure;

exports.addToCart = (req, res, next) => {
  const { body } = req;

  const { UserID, CartItems } = body;
  Cart.find({
    UserID,
  })
    .exec()
    .then((cart) => {
      if (cart.length >= 1) {
        return res.json({
          message: "Error - You have already added items to your cart from this username",
        })
          ;
      } else {
        const newCartEntry = new Cart();
        newCartEntry.UserID = UserID;
        newCartEntry.CartItems = CartItems;

        newCartEntry
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "Item has been added to the cart sucessfully",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};

exports.getAllCartEntries = (req, res) => {
  Cart.find((err, cart) => {
    if (err) {
      console.log(err);
    } else {
      res.json(cart);
    }
  });
};



// exports.getCartItemEntry = (req, res) => {
//   let userid = req.params.id;

//   Cart.find(userid)
//     .then((cart) => res.json(cart))
//     .catch((err) => res.status(400).json("Error: " + err));
// };


exports.userInCart = (req, res, next) => {
  const { body } = req;

  const { UserID } = body;
  Cart.find({
    UserID,
  })
    .exec()
    .then((cart) => {
      if (cart.length < 1) {
        return res.json({
          message: "Cart not existing"
        });
      }
      else {
        res.json({
          cart,
          message: "Cart existing"
        });
      }
    }
    )
};

exports.editCartEntry = (req, res) => {
  const { body } = req;
  const { CartItems } = body;


  Cart.findById(req.params.id, (err, cart) => {
    if (!cart)
      res.status(404).send("Error - Could not find the cart item inside the cart");
    else {
      cart.CartItems = CartItems;

      console.log(CartItems);
      cart.save()
        .then((cart) => {
          res.json({
            // message: "cart edited Successfully" + cart.CartItems
            message: "Your cart has been updated!!"

          });
        })
        .catch((err) => {
          res.json({

            message: "Error - Could not update the cart"

          });
          // res.status(400).send("Error - Could not update the cart");
        });
    }
  });
};

exports.deleteCartItem = (req, res, next) => {
  const { body } = req;

  const { UserID } = body;

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




exports.getCartEntry = (req, res) => {
  let userid = req.params.id;
  Cart.findById(userid)
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json("Error: " + err));
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


// exports.userInCart = (req, res, next) => {
//   const { body } = req;

//   const { UserID, CartItems } = body;
//   Cart.find({
//     UserID,
//   })
//     .exec()
//     .then((cart) => {
//       if (cart.length < 1) {
//         // res.json({
//         //   message: "Cart not existing " + UserID
//         // });


//       }
//       else {
//         cart.map(object => {
//           if (object.DressCode === CartItems.DressCode) {

//             object.DressPrice = CartItems.DressPrice;
//             object.Quantity = CartItems.Quantity;
//             object.Discount = CartItems.Discount;
//             object.Image = CartItems.Image;
//             itemAtCart: "true"
//           }

//         }
//         )
//       }
//     }
//     )
// };