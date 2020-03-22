import React, {Component}from 'react';
import './App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import home components
import NavBar from '../src/components/Home/NavBar';
import Container from '../src/components/Home/Container';
import Footer from '../src/components/Home/Footer';
import Wishlist from '../src/components/Wishlist/Wishlist';
import Items from '../src/components/Home/Items';
import Description from '../src/components/Home/Description';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="home">
          <NavBar/>
            <Switch>
              <Route path="/" exact component={ Container }/>
              <Route path="/description" component={ Description }/>
              <Route path="/items" component={ Items }/>
              <Route path="/wishlist" component={ Wishlist }/>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
