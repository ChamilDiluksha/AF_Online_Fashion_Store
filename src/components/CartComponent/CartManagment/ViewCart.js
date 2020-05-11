import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import objectId from "bson-objectid";
import NavBar from '../../Home/NavBar';


import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom'
import { Toast } from 'react-bootstrap';


export default class ViewCart extends Component {

    constructor(props) {

        super(props);

        this.state = {
            // UserID: this.state.user,
            CartItems: [],
            ExistingCartItems: [],
            itemAtCart: 'false',
            existingCart: '',
            passingCart: [],
            message: '',
            redirect: true,
            added: '',
            TotalPrice: 0,
            // TotalPrice: (this.props.location.aboutProps.DressPrice) * (this.props.location.aboutProps.Quantity),
            TotalItems: 0,
            product: this.props.location.aboutProps.productid
        };
    }


    setCartData = async () => {
        const cartEntry = {

            UserID: this.props.location.aboutProps.user.userId,

            TotalItems: 1,
            TotalPrice: (this.props.location.aboutProps.DressPrice) * (this.props.location.aboutProps.Quantity),

            CartItems: [{
                _id: objectId.generate(),
                DressCode: this.props.location.aboutProps.DressCode,
                DressType: this.props.location.aboutProps.DressType,
                DressPrice: this.props.location.aboutProps.DressPrice,
                Quantity: this.props.location.aboutProps.Quantity,
                Discount: this.props.location.aboutProps.Discount,
                DressImage: this.props.location.aboutProps.Image[0],
                ProductId: this.props.location.aboutProps.productid

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

                console.log(this.props.location.aboutProps.productid);
                console.log(object.ProductId);


                if (this.props.location.aboutProps.productid == object.ProductId) {
                    console.log("insideeee");
                    object.DressPrice = this.props.location.aboutProps.DressPrice;
                    object.Quantity = object.Quantity + this.props.location.aboutProps.Quantity;
                    console.log(object.Quantity);
                    object.Discount = this.props.location.aboutProps.Discount;
                    this.setState({
                        itemAtCart: "true",
                        TotalPrice: this.state.ExistingCartItems.TotalPrice + (this.props.location.aboutProps.Quantity * object.DressPrice),
                        TotalItems: this.state.ExistingCartItems.TotalItems

                    })

                }
            })

            this.setState({
                passingCart: this.state.ExistingCartItems.CartItems
            })

            console.log(this.state.passingCart);
            if (this.state.itemAtCart === "false") {
                this.setState({
                    passingCart: [...this.state.passingCart, cartEntry.CartItems[0]],
                    TotalItems: this.state.ExistingCartItems.TotalItems + 1,
                    TotalPrice: (this.props.location.aboutProps.DressPrice) * (this.props.location.aboutProps.Quantity) + this.state.ExistingCartItems.TotalPrice
                })
            };

            const tempUpdateCart = {
                CartItems: this.state.passingCart,
                TotalItems: this.state.TotalItems,
                TotalPrice: this.state.TotalPrice
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
            // <Toast>Added to the Cart Sucessfully</Toast>

            // window.location.href = "/description/:" + this.state.product;

        }

        // if (this.state.added) {
        // <Alert>Added to the Cart Sucessfully</Alert>
        // window.location.href = "/description/:" + this.state.product;

        // }

        window.alert("Added to the cart Sucessfully");
        window.location.href = "/";


    }

    renderRedirect = () => {
        const cookies = new Cookies();
        let user = cookies.get('user');

        if (user) {

        } else {
            alert('Please Login First..!');
            window.location.href = "/sign-in";
        }
        // console.log(this.props.location.aboutProps.UserID);
        // if (this.props.location.aboutProps.UserID != null) {
        //     return <Redirect to='/' />
        // } else {
        //     return <Redirect to='/sign-in' />
        // }

    }


    async componentDidMount() {
        console.log(this.props.location.aboutProps.UserID);
        const cookies = new Cookies();
        let user = cookies.get('user');
        this.setCartData();





    }




    render() {

        return (
            <div>

                <div>
                    <NavBar />
                    <div>

                    </div>
                    {this.renderRedirect()}

                </div>

            </div>

        );
    }
}