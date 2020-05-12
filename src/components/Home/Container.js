import React, {Component} from 'react';
// Import axios
import axios from 'axios';
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
  constructor(props) {
      super(props);
      this.state = {
          category : [],
          product: [],
          image: ''
        }
  }

  // Get all categories from db usin axios
  componentDidMount() {
      axios.get('http://localhost:5000/category/')
          .then(response => {
              this.setState({ category: response.data });
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  // Methods for create category cards
  renderCards() {
    axios.get('http://localhost:5000/product/')
      .then(response => {
          this.setState({
            product: response.data
          });
      })
        .catch(function (error) {
          console.log(error);
        })

    return this.state.category.map(function(object, i) {
      return <Link to={'/items/'+ object._id}>
        <Card  className="mr-4 category-card" style={{ width: '18rem' }}>
          <Card.Img variant="top"  src={category1}/>
          <Card.Body>
            <Card.Title className="text-center">{object.CategoryType}</Card.Title>
          </Card.Body>
        </Card>
      </Link>;
  });
}

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
            { this.renderCards() }
          </div>
          </div>
        </div>
      </div>
      )
    }
  }
