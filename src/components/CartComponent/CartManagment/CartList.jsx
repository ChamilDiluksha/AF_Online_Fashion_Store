import React, { Component } from 'react';
import MDBCol from './CartDetails';


class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        const CartItems = this.props.CartItems;
        console.log(CartItems);
        const temp = this.props.cart;
        const cid = this.props.cartid;

        return (
            <div>


                {
                    this.state.CartItems.map(todoItem => {
                        return <MDBCol obj={todoItem} cart={this.state.temp} cartid={this.state.cid}
                        />
                    })
                }


            </div>

        );
    }
}



export default CartList;