import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cookies from "universal-cookie";
import "./cartStyles.css";
import { Grid } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";

class CartDetails extends Component {
  constructor(props) {
    const cookies = new Cookies();
    let user = cookies.get("user");

    super(props);
    this.state = {
      user: user,
      Subtype: "",
      cid: this.props.obj._id,
      name: this.props.obj.Description,
      Quantity: this.props.obj.Quantity,
      Cart: [],
    };
    this.renderCards = this.renderCards.bind(this);
  }

  // getData = async () => {
  //   const cookies = new Cookies();
  //   let user = cookies.get('user');

  //   const uid = {
  //     UserID: user.userId
  //   }

  //   const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', uid);
  //   console.log(resusertemp);
  //   console.log(resusertemp.data.cart);
  //   this.setState({
  //     Cart: resusertemp.data.cart
  //   })
  //   console.log(this.state.Cart);
  // }

  // componentDidMount() {
  //   this.getData();

  // }
  updateQty() {
    const item = {
      UserID: this.state.user.userId,
      DressCode: this.props.obj.DressCode,
      Subtype: this.props.obj.Subtype,
      Description: this.props.obj.Description,
      ProductId: this.props.obj.productid,
      Quantity: this.state.Quantity,
      DressPrice: this.props.obj.DressPrice,
      DressImage: this.props.obj.DressImage,
      Total: this.state.Quantity * this.props.obj.DressPrice,
    };

    axios
      .put("http://localhost:5000/cart/update/" + this.props.obj._id, item)
      .then((response) => {
        console.log(response);
        window.location.href = "/cartview";
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    // alert('Item Incremeted.!');
    window.location.href = "/cartview";
  }

  decrementQunatity = async () => {
    console.log(this.props.obj.Description);
    console.log(this.state.Cart);
    // console.log(this.state.cid);
    if (this.state.Quantity > 1) {
      await this.setState({
        Quantity: this.state.Quantity - 1,
      });
    }
    this.updateQty();
  };

  incrementQunatity = async () => {
    console.log("increment clicked");
    await this.setState({
      Quantity: this.state.Quantity + 1,
    });
    console.log(this.props.obj.Description);
    this.updateQty();
  };

  removeFromCart() {
    // e.preventDefault();

    console.log("Delete");
    console.log(this.state.cid);

    axios
      .delete("http://localhost:5000/cart/delete/" + this.state.cid)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));

    alert("Item has removed from Cart..!");
    window.location.href = "/cartview";
  }

  // componentDidMount() {
  //   const cookies = new Cookies();
  //   let user = cookies.get('user');

  //   const uid = {
  //     UserID: user.userId
  //   }

  //   const resusertemp = axios.post('http://localhost:5000/cart/getCartUser', uid);
  //   this.setState({
  //     Cart: resusertemp.data.cart
  //   })

  // }

  renderCards() {
    console.log(this.props.obj.Description);
    if (this.state.user) {
      const userId = this.state.user.userId;

      if (this.props.obj.UserID == userId) {
        return (
          <Card className="mr-4 mb-4 wishlist-card" style={{ width: "18rem" }}>
            <Link>
              <Card.Img
                width="70px"
                height="250px"
                variant="top"
                src={`http://localhost:5000/${this.props.obj.DressImage}`}
              />
            </Link>
            <Card.Body>
              <Card.Text className="text-center">
                {this.props.obj.Description}
              </Card.Text>
              <Card.Title className="text-center">
                {this.props.obj.DressCode}
              </Card.Title>
              <Card.Title className="text-center">
                LKR {this.props.obj.DressPrice}
              </Card.Title>
              <div class="btn-group btn-group-medium" align="center">
                <Button
                  onClick={(e) => this.incrementQunatity()}
                  variant="medium"
                  className="btn btn-primary"
                >
                  {" "}
                  <i class="fa fa-plus-square" aria-hidden="true"></i>
                </Button>

                <Card.Text className="text-center">
                  Quantity {this.state.Quantity}
                </Card.Text>

                <Button
                  onClick={(e) => this.decrementQunatity()}
                  variant="dark"
                  className="mb-2 ml-3 mr-3"
                >
                  {" "}
                  <i class="fa fa-minus-square" aria-hidden="true"></i>
                </Button>
              </div>

              <Button
                onClick={(e) => this.removeFromCart()}
                variant="dark"
                className="mb-2"
                block
              >
                <i class="fas fa-trash mr-2" /> Remove From Cart
              </Button>
            </Card.Body>
          </Card>
        );
      }
    } else {
      alert("Please Log In..!");
      window.location.href = "/sign-in";
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props.obj.Description)}
        {this.renderCards()}
      </div>
    );
  }
}

export default CartDetails;
