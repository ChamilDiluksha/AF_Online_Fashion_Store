import React, { Component } from 'react';
import './cssstyle.css';
import {Nav, Navbar} from 'react-bootstrap'

class StoreNavigation extends Component {

    render() { 
        return (  
           <div>
               <h3 className = "header"> ~~ STORE MANAGER ~~</h3>
               <hr style = {{ color: '#333333', backgroundColor: '#333333', height: 2}}/>

               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">HOME</Nav.Link>
                    <Nav.Link href="">ADD ITEMS</Nav.Link>
                    <Nav.Link href="/ViewItems">VIEW ALL</Nav.Link>
                    <Nav.Link href="">UPDATE ITEMS</Nav.Link>
                    <Nav.Link href="">DELETED ITEMS</Nav.Link>
                </Nav>
                   <Nav.Link href="">CART</Nav.Link>
                   <Nav.Link href="">SIGN-OUT</Nav.Link>
               
                </Navbar.Collapse>
            </Navbar>
            <hr style = {{ color: '#333333', backgroundColor: '#333333', height: 2}}/>
            
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            
            </div>
           </div>      
        );
        
    }
}
 

 export default StoreNavigation
