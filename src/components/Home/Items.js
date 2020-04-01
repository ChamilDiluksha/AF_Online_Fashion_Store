import React, {Component}from 'react';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import men1 from'./images/men1.jpg';
import men2 from'./images/men2.jpg';
import men3 from'./images/men3.jpg';

export default class Items extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="page-header ml-4">Men</h1>
        <div className="container mt-4 category-container">
          <div className="row">
              <Card  className="mr-4" style={{ width: '18rem' }}>
                <Link to='/description'><Card.Img variant="top" src={men1} /></Link>
                <Card.Body>
                  <Card.Title className="text-center">Short Sleeve Shirt</Card.Title>
                  <Card.Text  className="text-center">Rs. 2650.00</Card.Text>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
                </Card.Body>
              </Card>
              <Card className="mr-4" style={{ width: '18rem' }}>
                <Link to='/description'><Card.Img variant="top" src={men2} /></Link>
                <Card.Body>
                  <Card.Title className="text-center">Long Sleeve Shirt</Card.Title>
                  <Card.Text  className="text-center">Rs. 2450.00</Card.Text>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
                </Card.Body>
              </Card>
              <Card className="mr-4" style={{ width: '18rem' }}>
                <Link to='/description'><Card.Img variant="top" src={men3} /></Link>
                <Card.Body>
                  <Card.Title className="text-center">Normal Collar Shirt</Card.Title>
                  <Card.Text  className="text-center">Rs. 2700.00</Card.Text>
                  <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                  <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
    )
  }
}
