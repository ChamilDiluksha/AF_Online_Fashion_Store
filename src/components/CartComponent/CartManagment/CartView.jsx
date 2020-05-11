import React, { Component } from 'react';
import axios from 'axios';
import MDBCol from './CartDetails';
import "./cartstyle.css"
import MDBCol1 from './CartList';
import { Image, Statistic, Grid } from 'semantic-ui-react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBAlert } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";


class CartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CartItems: [],
            CartId: '',
            cartVal: false,
            fullCart: '',
            rescart: ''
        }



    }

    checkUserLogin = async () => {
        const cookies = new Cookies();
        let user = cookies.get('user');
        if (user) {
            const cartEntry = {
                UserID: user.userId,
            };
            const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', cartEntry);
            this.setState({
                rescart: resusertemp.data.cart[0]._id
            });

        } else {
            alert('Please Login First to view the cart..!');
            window.location.href = "/sign-in";
        }
    }

    async componentDidMount() {

        const cookies = new Cookies();
        let user = cookies.get('user');
        if (user) {
            const cartEntry = {
                UserID: user.userId,
            };
            const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', cartEntry);
            this.setState({
                rescart: resusertemp.data.cart[0]._id
            });

        } else {
            alert('Please Login First to view the cart..!');
            window.location.href = "/sign-in";
        }

        // const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', cartEntry);
        // console.log(resusertemp.data);
        // this.setState({
        //     existingCart: resusertemp.data
        // });

        //carts _id
        await axios.get('http://localhost:5000/cart/' + this.state.rescart)
            .then(response => {
                this.setState({
                    CartItems: response.data.CartItems,
                    CartId: response.data._id,
                    fullCart: response.data

                });
                console.log(this.state.CartItems.length);
                console.log(this.state.cartVal);
            })
            .catch(function (error) {
                console.log(error);
            })

        // console.log(this.state.CartItems.length);


    }
    returnHome() {
        window.location.href = "/";

    }


    cartEmpty() {
        // const ival = this.state.CartItems.length;
        // if (ival === 0) {


        //     // if (window.confirm("Sorry Currently Your Shopping Cart is Empty")) {
        //     //     this.returnHome();
        //     // } else {
        //     //     this.returnHome();
        //     // }

        // }
        // else {
        //     return true;
        // }

    }

    // DecrementArrQty = (dSingleState) => {
    //     // console.log(newImages)
    //     // this.setState({ images: newImages })
    // }

    // IncrementArrQty = (dSingleState) => {
    //     console.log("GGGGGGGGGGGG")
    //     // this.setState({ images: newImages })
    // }



    tabRow() {
        // const temp = this.state.CartItems;
        const temp = this.state.fullCart;
        const cid = this.state.CartId;
        console.log(this.state.CartItems);
        // return <MDBCol1 cartItems={this.state.CartItems}
        //     cart={temp} cartid={cid}
        // >

        // </MDBCol1>

        return this.state.CartItems.map(function (object, i) {
            return <MDBCol
                // increment={this.IncrementArrQty}
                obj={object} key={i} cart={temp} cartid={cid} />;
        });
    }




    render() {

        return (


            <div className="row">
                <div className="col-13" style={{ paddingLeft: "30px", paddingRight: "60px" }}>
                    <div>
                        {this.cartEmpty()}
                        <h2 align="center">Cart Items</h2>
                    </div>
                    <div class="wrap cf">
                        <h1 class="projTitle">Shopping Cart</h1>
                        <div class="heading cf">



                            <div className="containter">
                                <Grid>

                                    <div align="left">
                                        <MDBContainer>
                                            <MDBRow mb-5>
                                                {this.tabRow()}
                                            </MDBRow>
                                        </MDBContainer>
                                    </div>
                                    <div align="right">

                                        <h1>Total                        LKR        </h1>
                                        <h1>               {this.state.fullCart.TotalPrice}</h1>
                                    </div>
                                    <div>
                                        <Button>
                                            <Link to={{ pathname: '/checkout', aboutProps: this.state }}>Checkout</Link>
                                        </Button>

                                    </div>

                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default CartView; 
