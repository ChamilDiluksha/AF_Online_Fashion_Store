import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import NavBar from "../../Home/NavBar";
import Cookies from "universal-cookie";
import axios from "axios";

export default class Checkout extends Component {
  constructor(props) {
    const cookies = new Cookies();
    let user = cookies.get("user");

    super(props);

    this.state = {
      user: user,
      cart: this.props.location.aboutProps.Cart,
      cartItem: "",
    };
  }

  async onSubmit() {
    console.log(this.props.location.aboutProps.Cart);

    console.log("inside submit");
    const t = this.state.cart;

    const tempDate = new Date();
    const oid =
      "ORD" +
      this.state.user.userId +
      Math.floor(Math.random() * (+10000 - +100)) +
      +100;

    await Promise.all(
      t.map(function (object, i) {
        console.log("inside submit map");
        console.log(object);

        const orderobj = {
          OrderId: oid,
          UserID: object.UserID,
          DressCode: object.DressCode,
          Subtype: object.Subtype,
          Description: object.Description,
          ProductId: object.ProductId,
          Quantity: object.Quantity,
          DressPrice: object.DressPrice,
          DressImage: object.DressImage,
          Total: object.Total,
          PlacedDate: tempDate,
        };

        axios
          .post("http://localhost:5000/order/create", orderobj)
          .then(console.log("created"))
          .catch((err) => console.log(err));
      })
    );

    await Promise.all(
      t.map(function (object, i) {
        console.log("inside delete ");

        console.log(object._id);

        axios
          .delete("http://localhost:5000/cart/delete/" + object._id)
          .then(console.log("Deleted"))
          .catch((err) => console.log(err));
      })
    );

    alert("Your Order has been Placed sucessfully.!");
    window.location.href = "/log";
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="ml-5 mr-5 mt-5 mb-5">
          <h1>Getting Your Order</h1>

          <Form
          // onSubmit={(e) => this.onSubmit()}
          >
            <h3>
              <i class="fa fa-truck" aria-hidden="true"></i> Shipping
              Information
            </h3>

            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <h3>
              <i class="fa fa-credit-card-alt" aria-hidden="true"></i> Payment
              Information
            </h3>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Card Type
                </Form.Label>
                <Col sm={10}>
                  <Form.Check type="radio" label="VISA" />
                  <Form.Check type="radio" label="Master Card" />
                  <Form.Check type="radio" label="American Express" />
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Col}>
              <Form.Label>Card Type</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Card No</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Total Amount</Form.Label>
              <Form.Control
                contentEditable="false"
                type="text"
                value={"LKR   " + this.props.location.aboutProps.Total}
              />
            </Form.Group>

            <Button variant="outline-primary" onClick={(e) => this.onSubmit()}>
              Place Order
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
