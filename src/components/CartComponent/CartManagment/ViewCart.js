import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import objectId from "bson-objectid";

import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom'


export default class ViewCart extends Component {

    constructor(props) {

        super(props);

        this.state = {
            CartItems: [],
            ExistingCartItems: [],
            itemAtCart: 'false',
            existingCart: '',
            passingCart: [],
            message: '',
            redirect: true,
            added: ''
        };
    }


    setCartData = async () => {
        const cartEntry = {
            UserID: this.props.location.aboutProps.UserID,
            // UserID: this.state.UserID,
            CartItems: [{
                _id: objectId.generate(),
                DressCode: this.props.location.aboutProps.DressCode,
                DressType: this.props.location.aboutProps.DressType,
                DressPrice: this.props.location.aboutProps.DressPrice,
                Quantity: this.props.location.aboutProps.Quantity,
                Discount: this.props.location.aboutProps.Discount,
                Image: this.props.location.aboutProps.Image,

            }]
        };



        const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', cartEntry);
        console.log(resusertemp.data);
        this.setState({
            existingCart: resusertemp.data
        });

        console.log(this.state.existingCart);

        if (this.state.existingCart.message === 'Cart existing') {
            const _id = this.state.existingCart.cart[0]._id;

            console.log(this.state.existingCart.cart);
            this.setState({
                ExistingCartItems: this.state.existingCart.cart[0]
            });

            this.state.ExistingCartItems.CartItems.map(object => {
                if (object.DressCode === this.props.location.aboutProps.DressCode) {

                    object.DressPrice = this.props.location.aboutProps.DressPrice;
                    object.Quantity = this.props.location.aboutProps.Quantity;
                    console.log(object.Quantity);
                    object.Discount = this.props.location.aboutProps.Discount;
                    object.Image = this.props.location.aboutProps.Image;
                    this.setState({
                        itemAtCart: "true"
                    })

                }
            })

            this.setState({
                passingCart: this.state.ExistingCartItems.CartItems
            })

            console.log(this.state.passingCart);
            if (this.state.itemAtCart === "false") {
                this.setState({
                    passingCart: [...this.state.passingCart, cartEntry.CartItems[0]]
                })
            };

            const tempUpdateCart = {
                CartItems: this.state.passingCart
            }

            console.log("herrrr");
            const tempup = await axios.put('http://localhost:5000/cart/update/' + _id, tempUpdateCart);


            this.setState({
                message: tempup.data,
                added: tempup.data
            });
            console.log(this.state.added);

        }

        else {

            const resaddnew = await axios.post('http://localhost:5000/cart/create', cartEntry);



            this.setState({
                message: resaddnew.data.message,
                added: resaddnew.data.message
            });

            console.log(this.state.added);

        }





    }

    renderRedirect = () => {
        console.log(this.props.location.aboutProps.UserID);
        if (this.props.location.aboutProps.UserID != null) {
            return <Redirect to='/' />
        } else {
            return <Redirect to='/sign-in' />
        }

    }


    async componentDidMount() {
        console.log(this.props.location.aboutProps.UserID);

        this.setCartData();


    }




    render() {

        return (
            <div>

                <div>
                    {this.renderRedirect()}

                </div>

            </div>

        );
    }
}