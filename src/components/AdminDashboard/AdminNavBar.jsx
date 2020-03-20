import React, { Component } from 'react';
import {ListGroup,Card, Nav, Navbar,NavDropdown} from 'react-bootstrap'
import './style.css';

class AdminNavBar extends Component {
   
    render() { 
        return (  
           <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Admin/AddManager">Add Store Manager</Nav.Link>
                    <Nav.Link href="/Admin/AddCategory">Add category</Nav.Link>
                    <Nav.Link href="/Admin/ViewManager">View Store Manager</Nav.Link>
                    <Nav.Link href="/Admin/vieCategory">View category</Nav.Link>
                
                </Nav>
                <Nav>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        
        );
    }
}
 
export default AdminNavBar;