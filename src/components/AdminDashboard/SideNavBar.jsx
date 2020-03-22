import React, { Component } from 'react';
import {ListGroup,Card, Nav, Navbar,NavDropdown} from 'react-bootstrap'
import './style.css';

class SideNavBar extends Component {
    state = {  }
    render() { 
        return ( 
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

            <section id="main">
                <div class="container">
                    <div class="row">
                    <div class="col-md-3">
                        <div class="list-group"></div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Dashboard</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="/Admin/AddManager"> <i className="fas fa-user-tie" style={{padding:"10px"}}></i> Add Store Manager</ListGroup.Item>
                            <ListGroup.Item action href="/Admin/AddCategory"><i className="fas fa-tshirt" style={{padding:"10px"}}></i>Add category</ListGroup.Item>
                            <ListGroup.Item action href="/Admin/ViewManager"> <i className="fas fa-street-view" style={{padding:"10px"}}></i>View Store Manager</ListGroup.Item>
                            <ListGroup.Item action href="/Admin/vieCategory"> <i className="fas fa-clipboard-list" style={{padding:"10px"}}></i>View category</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        </div>
                    </div>
                </div>
     
            </section>

           
            </div>
         );
    }
}
 
export default SideNavBar;