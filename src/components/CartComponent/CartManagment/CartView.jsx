import React, { Component } from "react";
// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartStyles.css";
import NavBar from "../../Home/NavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
// import category1 from './images/category1.jpg';
// import category2 from './images/category2.jpg';
// import category3 from './images/category3.jpg';

// import DisplayWishlist from './DisplayWishlist/DisplayWishlist';
import CartDetails from "./CartDetails";

export default class CartView extends Component {
  constructor(props) {
    const cookies = new Cookies();
    let user = cookies.get("user");

    super(props);
    this.state = {
      user: user,
      Subtype: "",
      Cart: [],
      Total: 0,
      message: "",
    };

    // - {this.state.user.userId}
    this.renderCards = this.renderCards.bind(this);
  }

  async componentDidMount() {
    const cookies = new Cookies();
    let user = cookies.get("user");

    if (user) {
      const uid = {
        UserID: user.userId,
      };

      const resusertemp = await axios.post(
        "http://localhost:5000/cart/getCartUser",
        uid
      );
      console.log(resusertemp);
      console.log(resusertemp.data.cart);
      this.setState({
        Cart: resusertemp.data.cart,
        message: resusertemp.data.message,
      });

      let total = 0;
      this.state.Cart.map(function (object, i) {
        total = total + object.Total;
      });

      this.setState({
        Total: total,
      });

      console.log(this.state.Cart);
    } else {
      alert("Please Log In..!");
      window.location.href = "/sign-in";
    }
  }
  setTot() {
    const total = 0;
    this.state.Cart.map(function (object, i) {
      total = total + object.Total;
    });
    this.setState({
      Total: total,
    });
  }

  emptCart() {
    alert("Your Shopping Cart is Empty Right Now..!");
    window.location.href = "/log";
  }

  renderCards() {
    // console.log(this.state.Cart.length);

    if (this.state.message === "Cart not existing") {
      this.emptCart();
    } else {
      return this.state.Cart.map(function (object, i) {
        return <CartDetails obj={object} key={i} />;
      });
    }
  }

  getState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="main-container">
          <h1 className="page-header ml-4">MY SHOPPING CART </h1>
          <div class="btn-group btn-group-medium" align="center">
            <div className="container mt-4 category-container">
              <div className="row">{this.renderCards()}</div>
            </div>
            <div className="mt-4 ">
              <Card
                bg="light"
                className="mr-4 mb-4 wishlist-card"
                style={{ width: "18rem" }}
              >
                <Card.Body bg-dark>
                  <Card.Title>Cart Summery</Card.Title>
                  <Card.Title className="text-center">Sub Total</Card.Title>
                  <Card.Title className="text-center">
                    LKR {this.state.Total}
                  </Card.Title>

                  <Button variant="dark" className="mb-2 ml-3 mr-3">
                    <Link
                      variant="light"
                      to={{
                        pathname: "/checkout",
                        aboutProps: this.state,
                      }}
                    >
                      Proceed To Checkout
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
