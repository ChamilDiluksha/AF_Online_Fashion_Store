import React, { Component } from 'react';
import axios from 'axios';
import MDBCol from './CartDetails';
import { Image, Statistic, Grid } from 'semantic-ui-react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBAlert } from 'mdbreact';


class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CartItems: [],
            CartId: '',
            cartVal: false
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/cart/' + "5ea9e41f0dd55b42842d894f")
            .then(response => {
                this.setState({
                    CartItems: response.data.CartItems,
                    CartId: response.data._id

                });
                console.log(this.state.CartItems.length);
                console.log(this.state.cartVal);
            })
            .catch(function (error) {
                console.log(error);
            })

        console.log(this.state.CartItems.length);


    }
    returnHome() {
        window.location.href = "/";

    }

    cartEmpty() {
        const ival = this.state.CartItems.length;
        if (ival === 0) {


            if (window.confirm("Sorry Currently Your Shopping Cart is Empty")) {
                this.returnHome();
            } else {
                this.returnHome();
            }

        }
        else {
            return true;
        }

    }

    tabRow() {
        const temp = this.state.CartItems;
        const cid = this.state.CartId;
        return this.state.CartItems.map(function (object, i) {
            return <MDBCol obj={object} key={i} cart={temp} cartid={cid} />;
        });
    }



    render() {

        return (


            <div className="row">
                <div className="col-13" style={{ paddingLeft: "30px", paddingRight: "60px" }}>

                    {this.cartEmpty()}
                    <h5 align="center">Cart Items</h5>
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

                                <h1>Total</h1>
                            </div>
                        </Grid>
                    </div>
                </div>
            </div>

        )
    }



}

export default CartView; 
