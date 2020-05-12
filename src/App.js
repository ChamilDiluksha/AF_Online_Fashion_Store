import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import axios from "axios";
import Admin from "./components/AdminDashboard/AdminHandler";
import Login from "./components/Login";
import Signup from "./components/Signup";
// Import home components
import Dashboard from "./components/Dashboard";
import NavBar from "../src/components/Home/NavBar";
import Container from "../src/components/Home/Container";
import Footer from "../src/components/Home/Footer";
import Wishlist from "./components/Wishlist/Wishlist";
import Delivery from "../src/components/Home/Delivery";
import Sizeguide from "../src/components/Home/Sizeguide";
import Items from "../src/components/Home/Items";
import Description from "../src/components/Home/Description";
import "semantic-ui-css/semantic.min.css";

import AddManager from "./components/AdminDashboard/NavComponenets/CreateStoreManager";
import AddCategory from "./components/AdminDashboard/NavComponenets/CreateCategory";
import viewManager from "./components/AdminDashboard/ViewComponent/viewManager";
import viewCategory from "./components/AdminDashboard/ViewComponent/viewCategory";
import editManager from "./components/AdminDashboard/EditComponent/editStoreManager";
import editCategory from "./components/AdminDashboard/EditComponent/editCategory";

//import cart managment components
import ViewCart from "./components/CartComponent/CartManagment/ViewCart";
import ViewOrder from "./components/CartComponent/OrderManagment/ViewOrder";
import OrderHistory from "./components/CartComponent/OrderManagment/OrderHistory";
import Checkout from "./components/CartComponent/OrderManagment/Checkout";
import UserCart from "./components/CartComponent/CartManagment/UserCart";
import CartView from "./components/CartComponent/CartManagment/CartView";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.validateToken = this.validateToken.bind(this);
    const cookies = new Cookies();
    let user = cookies.get("user");
    let token = cookies.get("token");
    this.state = {
      user: user,
      token: token,
    };
    this.validateToken();
  }
  validateToken() {
    //validate token
    let obj = {
      token: this.state.token,
      user: this.state.user,
    };
    if (this.state.user) {
      axios.post("http://localhost:5000/user/validate", obj).then(
        (response) => {
          if (response.data.valid) {
          } else {
            const cookies = new Cookies();
            cookies.remove("token", this.state.token);
            cookies.remove("user", this.state.user);

            // window.location.href = "/";
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="home">
          {
            this.state.user
              ? window.location.pathname === "/"
                ? (window.location.pathname = "/log")
                : null
              : null //true
            //((window.location.pathname !== '/') ? (window.location.pathname = '/') : null) //false
          }

          <Router>
            <Switch>
              <Route exact path="/" exact component={Container} />
              <Route path="/log" component={Dashboard} />

              <Route path="/description/:id" component={Description} />

              <Route path="/Signup" component={Signup} />
              <Route path="/sign-in" component={Login} />
              <Route path="/items/:id" component={Items} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/sizeguide" component={Sizeguide} />
              <Route path="/vieworder" component={ViewOrder} />
              <Route path="/viewcart" component={ViewCart} />

              <Route path="/checkout" component={Checkout} />
              <Route path="/cartview" component={CartView} />
              <Route path="/orderhistory" component={OrderHistory} />
            </Switch>
          </Router>
          {window.location.pathname !== "/sign-in" ? <Footer /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
