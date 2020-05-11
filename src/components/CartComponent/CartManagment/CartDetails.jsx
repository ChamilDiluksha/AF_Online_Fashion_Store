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
      Cart: this.props.cart.CartItems,
      fcart: this.props.cart,
      cid: this.props.cartid,
      prevQty: 0,
      price: 0
      // TotalPrice: 0,
      // // TotalPrice: (this.props.location.aboutProps.DressPrice) * (this.props.location.aboutProps.Quantity),
      // TotalItems: 0
    };
  }

  incrementQunatity() {
    console.log(this.state.Cart);
    console.log("clicked");
    console.log(this.state.index);
    this.setState({
      Quantity: this.state.Quantity + 1,
    });


  }

  decrementQunatity() {

    // this.setState({
    //   index: this.state.Cart.findIndex(obj => obj._id === this.state.id)
    // })


    // console.log("indeccccc");
    // console.log(this.state.index);

    // console.log(this.props.key);
    console.log(this.state.index);
    if (this.state.Quantity > 1) {
      this.setState({
        index: this.state.Cart.findIndex(obj => obj._id == this.state.id),
        Quantity: this.state.Quantity - 1,
      });
      console.log(this.state.id);
    }
  }

  confirm = async () => {



    // this.setState({
    //   index: this.state.Cart.findIndex(obj => obj._id == this.state.id),
    //   new: this.state.Cart.splice(this.state.index, 1)
    // })

    const cartid = this.state.cid;

    this.state.fcart.CartItems.map(object => {
      // this.state.Cart.map(object => {

      // console.log(this.props.location.aboutProps.productid);
      // console.log(object.ProductId);


      if (this.props.obj.ProductId == object.ProductId) {
        console.log("insideeee");
        this.setState({
          prevQty: object.Quantity,
          price: object.DressPrice
        })

        object.Quantity = this.state.Quantity;
        console.log(object.Quantity);
        // this.setState({
        //     itemAtCart: "true",
        //     TotalPrice: this.state.ExistingCartItems.TotalPrice + (this.props.location.aboutProps.Quantity * object.DressPrice),
        //     TotalItems: this.state.ExistingCartItems.TotalItems

        // })

      }
    })

    const load = {
      CartItems: this.state.fcart.CartItems,
      TotalItems: this.state.fcart.TotalItems,
      TotalPrice: this.state.fcart.TotalPrice - (this.state.price * this.state.prevQty) + (this.state.price * this.state.Quantity)

    }
    console.log(load);
    const tempup = await axios.put('http://localhost:5000/cart/update/' + cartid, load);
    console.log(tempup);
    // window.location.href = "/cartview";

    // axios.put('http://localhost:5000/cart/update/' + cartid, load)
    //   .then(console.log('Updatedddd'))
    //   .catch(err => console.log(err));
    // window.location.href = "/cartview";

  }




  delete() {
    this.setState({
      index: this.state.Cart.findIndex(obj => obj._id == this.state.id),
      new: this.state.Cart.splice(this.state.index, 1)
    })

    const cartid = this.state.cid;


    const load = {
      CartItems: this.state.Cart,
      TotalItems: this.state.fcart.TotalItems - 1,
      TotalPrice: this.state.fcart.TotalPrice - (this.props.obj.DressPrice * this.state.Quantity)
    }

    // const load = {
    //   CartItems: this.state.Cart
    // }

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
            src={`http://localhost:5000/${this.props.obj.DressImage}`}
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
            <Grid textAlign="center">
              <MDBBtn onClick={(e) => this.confirm()} className="button" align="center">
                Confirm
              </MDBBtn>
            </Grid>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    );
  }
}

export default CartDetails;
