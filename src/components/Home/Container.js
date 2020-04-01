import React, {Component}from 'react';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

import category1 from'./images/category1.jpg';
import category2 from'./images/category2.jpg';
import category3 from'./images/category3.jpg';
import carousel1 from'./images/carousel1.jpg';
import carousel2 from'./images/carousel2.jpg';
import carousel3 from'./images/carousel3.jpg';

export default class Container extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img src={carousel1} class="d-block img-fluid"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel2} class="d-block img-fluid"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel3} class="d-block img-fluid"/>
          </Carousel.Item>
        </Carousel>
        </div>
        <div className="main-container">
          <h1 className="page-header ml-4">Categories</h1>
          <div className="container mt-4 category-container">
            <div className="row">
                <Link to='/items'>
                  <Card  className="mr-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category1} />
                    <Card.Body>
                      <Card.Title className="text-center">Men</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <Link to='/items'>
                <Card className="mr-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={category2} />
                  <Card.Body>
                    <Card.Title className="text-center">Women</Card.Title>
                  </Card.Body>
                </Card>
                </Link>
                <Link to='/items'>
                <Card className="mr-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={category3} />
                  <Card.Body>
                    <Card.Title className="text-center">Kids</Card.Title>
                  </Card.Body>
                </Card>
                </Link>
              </div>
          </div>
        </div>
      </div>
      )
    }
  }
