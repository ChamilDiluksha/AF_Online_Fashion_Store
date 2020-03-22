import React, { Component } from 'react';
import {ListGroup,Card, Nav, Navbar,NavDropdown} from 'react-bootstrap'
import user from './images/user.png';

class AdminNavBar extends Component {
   
    render() { 
        return (  
            <div >
                
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="/Admin">Admin</Navbar.Brand>
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
                <Navbar.Brand href="/"  className="user">
                            <img style={{height:"30px", width:"30px", }} src={user} alt="user" align="center"/>
                        </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
            <hr className="navDivider"/>

            <div>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Manage Your Site</small></h1>
                            </div>
                    
                        </div>
                    </div>
                </header>

            </div>
            
        </div>

        
        
        );
    }
}
 
export default AdminNavBar;