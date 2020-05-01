import React, { Component } from 'react';
import axios from 'axios';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';
import Cookies from "universal-cookie";
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import men1 from './images/men1.jpg';
import men2 from './images/men2.jpg';
import men3 from './images/men3.jpg';

import { Link } from 'react-router-dom';

export default class Description extends Component {
  constructor(props) {
    const cookies = new Cookies();
    let user = cookies.get('user');
    super(props);


    this.state = {
      // UserID: user.username.toString(),
      UserID: '',
      DressCode: '',
      DressType: '',
      DressPrice: 0,
      Quantity: 0,
      Discount: 0,
      Image: '',
      Description: '',
      Subtype: '',
      productid: ''
    };
  }

  componentDidMount() {
      axios.get('http://localhost:5000/product/'+ this.props.match.params.id)
        .then(response => {
              console.log(response.data);
            this.setState({
              UserID: response.data.UserID,
              DressCode: response.data.DressCode,
              DressType: response.data.DressType,
              productid: response.data._id,
              Discount: response.data.Discount,
              Quantity: response.data.Quantity,
              DressPrice: response.data.DressPrice,
              Subtype: response.data.Subtype,
              Description: response.data.description,
              Image: response.data.images
            });
        })
          .catch(function (error) {
            console.log(error);
          })
  }

  render() {

    return (
      <div>
        <NavBar/>
        <div className="main-container">
          <div className="container mt-4 category-container">
            <div className="row">
              <div className="col-md-6">
              <Card  className="mr-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:5000/${this.state.Image[0]}`} />
                <Card.Body>
                  <Card.Title className="text-center">Rs. {this.state.DressPrice}.00</Card.Title>
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-6">
                <h1 className="page-header ml-4 text-center">{this.state.Subtype}</h1>
                <ul className="mt-5">
                  <li>{this.state.Description}</li>
                </ul>
                <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
              </div>
            </div>

              <h3 className="page-header mt-5">Review & Comments..</h3>
              <ListGroup className="mt-5">
                <ListGroup.Item><h4>Comment 1</h4><h6>User 1</h6></ListGroup.Item>
                <ListGroup.Item><h4>Comment 2</h4><h6>User 2</h6></ListGroup.Item>
                <ListGroup.Item><h4>Comment 3</h4><h6>User 3</h6></ListGroup.Item>
                <ListGroup.Item><h4>Comment 4</h4><h6>User 4</h6></ListGroup.Item>
                <ListGroup.Item><h4>Comment 5</h4><h6>User 5</h6></ListGroup.Item>
              </ListGroup>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="mt-5">Add Your Comment.</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Label className="mt-3">Add Your Review.</Form.Label>
                <div className="col-md-6">
                  <Form.Group controlId="formBasicRangeCustom">
                    <Form.Control type="range" custom />
                  </Form.Group>
                </div>
                <Button variant="dark"type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>

          </div>
        </div>
      </div>
    )
  }
}
