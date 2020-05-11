import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from "mdbreact";
import "./cartStyles.css";
import { Grid } from "semantic-ui-react";

class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: this.props.obj.Quantity,
      id: this.props.obj._id,
      index: 0,
      Cart: this.props.cart,
      cid: this.props.cartid
    };
  }

  incrementQunatity() {
    console.log("clicked");

    this.setState({
      Quantity: this.state.Quantity + 1,
    });

  }

  decrementQunatity() {

    this.setState({
      index: this.state.Cart.findIndex(obj => obj._id === this.state.id)
    })


    console.log("indeccccc");
    console.log(this.state.index);

    console.log(this.props.key);
    if (this.state.Quantity > 0) {
      this.setState({
        Quantity: this.state.Quantity - 1,
      });
    }
  }



  delete() {
    this.setState({
      index: this.state.Cart.findIndex(obj => obj._id == this.state.id),
      new: this.state.Cart.splice(this.state.index, 1)
    })

    const cartid = this.state.cid;

    const load = {
      CartItems: this.state.Cart
    }

    axios.put('http://localhost:5000/cart/update/' + cartid, load)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
    window.location.href = "/cartview";

  }

  render() {
    return (

      <MDBCol mb-5>
        <MDBCard mb-5 style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <Grid textAlign="center">
              <MDBCardTitle align="center">
                {this.props.obj.DressType}
              </MDBCardTitle>
            </Grid>
            <Grid align="center">
              <MDBCardText align="center">Dress Code</MDBCardText>
              <MDBCardText align="center">
                {this.props.obj.DressCode}
              </MDBCardText>
            </Grid>
            <Grid align="center">
              <MDBCardText align="center">Dress Price</MDBCardText>
              <MDBCardText align="center">
                {this.props.obj.DressPrice}
              </MDBCardText>
            </Grid>

            <Grid align="center">
              <MDBCardText large style={{ paddingRight: "10px" }}>
                Quantity
              </MDBCardText>
              <MDBBtn onClick={(e) => this.incrementQunatity()}>
                {" "}
                <i
                  className="fa fa-plus-square"
                  style={{ paddingRight: "5px" }}
                ></i>{" "}
              </MDBBtn>
              <MDBCardText large style={{ paddingRight: "10px" }}>
                {this.state.Quantity}
              </MDBCardText>

              <MDBBtn onClick={(e) => this.decrementQunatity()}>
                <i
                  className="fa fa-minus-square"
                  style={{ paddingRight: "5px" }}
                  aria-hidden="true"
                ></i>{" "}
              </MDBBtn>
            </Grid>
            <Grid textAlign="center">
              <MDBBtn onClick={(e) => this.delete()} className="button" align="center">
                Remove From Cart
              </MDBBtn>
            </Grid>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    );
  }
}

export default CartDetails;
