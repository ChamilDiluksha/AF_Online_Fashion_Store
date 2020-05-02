import React, {Component}from 'react';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './WishlistStyles.css';
import NavBar from '../Home/NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";

import category1 from'./images/category1.jpg';
import category2 from'./images/category2.jpg';
import category3 from'./images/category3.jpg';

export default class wishlist extends Component {
  constructor(props) {
      const cookies = new Cookies();
      let user = cookies.get('user');

      super(props);
      this.state = {
          user: user
      }
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className="main-container">
        <h1 className="page-header ml-4">My Wishlist</h1>
        <div className="container mt-4 category-container">
          <div className="row">
              <Card  className="mr-4" style={{ width: '18rem' }}>
                <Link to='/description'><Card.Img variant="top" src={category1} /></Link>
                <Card.Body>
                  <Card.Title className="text-center">Men</Card.Title>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-trash mr-2"/> Remove from Wishlist</Button>
                </Card.Body>
              </Card>
              <Card className="mr-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={category2} />
                <Card.Body>
                  <Card.Title className="text-center">Women</Card.Title>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-trash mr-2"/> Remove from Wishlist</Button>
                </Card.Body>
              </Card>
              <Card className="mr-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={category3} />
                <Card.Body>
                  <Card.Title className="text-center">Kids</Card.Title>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-trash mr-2"/> Remove from Wishlist</Button>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
    </div>
    )
  }
}
