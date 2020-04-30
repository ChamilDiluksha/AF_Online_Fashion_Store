// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from "universal-cookie";
// import objectId from "bson-objectid";
// // import Alert from '@material-ui/lab/Alert';
// // import { Alert } from 'semantic-ui-react'
// import Alert from 'react-bootstrap/Alert';
// import { Redirect } from 'react-router-dom'
// import CartItem from './CartItem';


// export default class UserCart extends Component {


//     constructor(props) {
//         // const cookies = new Cookies();
//         // let user = cookies.get('user');
//         super(props);
//         this.state = {
//             UserID: 'USD345',
//             CartItems: ''
//         }
//     }

//     getUserCartData = async () => {

//         const username = {
//             UserID: this.state.UserID
//         }

//         console.log(username);
//         const resusertemp = await axios.post('http://localhost:5000/cart/getCartUser', username);
//         console.log(resusertemp.data);
//         this.setState({
//             CartItems: resusertemp.data
//         });


//     }

//     tabRow() {
//         return this.state.CartItems.map(function (object, i) {
//             return <TableRow obj={object} key={i} />;
//         });
//     }



//     async componentDidMount() {
//         await this.getUserCartData();

//     }






//     render() {
//         const cart = this.state.CartItems;
//         console.log(cart);
//         return (

//             <div>

//                 <div>


//                     <CartItem></CartItem>




//                 </div>

//             </div>

//         );
//     }
// }