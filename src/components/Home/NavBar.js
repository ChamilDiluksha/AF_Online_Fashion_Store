import React, {Component}from 'react';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';

import { Link } from 'react-router-dom';

// Boptstrap components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Link to='/'>
            <Navbar.Brand href="#home">CSKP <span className="logo-subhead">Fashion Store</span></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Delivery</Nav.Link>
              <Nav.Link href="#link">Size Guide</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
            <Nav.Link href="#link"><i class="fas fa-user mr-2"/>Sign In</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
              <Button variant="outline-dark" >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Link to='/wishlist'><Button variant="outline-dark" className="float-right mr-4 mb-4 mt-4 wishlist-btn" onClick={()=>{console.log('Hello');}}>Wish List <i class="fas fa-heart"/></Button></Link>
        <Button variant="outline-dark" className="float-right mr-4 mb-4 mt-4 shoppiglist-btn">Shopping Cart <i class="fas fa-shopping-cart"/></Button>
    </div>
    )
  }
}
