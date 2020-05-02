import React, {Component}from 'react';
// Import axios
import axios from 'axios';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import men1 from'./images/men1.jpg';
import men2 from'./images/men2.jpg';
import men3 from'./images/men3.jpg';

export default class Items extends Component {
  constructor(props) {
      super(props);
      this.state = {
          category : [],
          product: [],
          CategoryType: ''
        }

        this.displayItems = this.displayItems.bind(this);
  }



  componentDidMount() {
      axios.get('http://localhost:5000/product/')
        .then(response => {
          console.log(response.data);
            this.setState({
              product: response.data
            });
        })
          .catch(function (error) {
            console.log(error);
          })

          axios.get('http://localhost:5000/category/'+ this.props.match.params.id)
              .then(response => {
                  this.setState({
                      CategoryType: response.data.CategoryType
                  });
              })
              .catch(function (error) {
                  console.log(error);
              })

  }

  getCategory() {
    return  <h1 className="page-header ml-4">{this.state.CategoryType}</h1>
  }

  displayItems() {
    let clickedCategory = this.state.CategoryType;

     return this.state.product.map(function(object, i){
       return  (object.Category == clickedCategory) ?  <Link to={'/description'}>
            <Card  className="mr-4 product-card" style={{ width: '18rem' }}>
              <Link to={'/description/'+ object._id}><Card.Img variant="top" src={`http://localhost:5000/${ object.images[0]} `} alt="No Preview"/></Link>
              <Card.Body>
                <Card.Title className="text-center">{ object.DressCode }</Card.Title>
                <Card.Text  className="text-center">Rs. { object.DressPrice }.00</Card.Text>
                <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
              </Card.Body>
            </Card>
          </Link> : ''
        ;
  });
}
  render() {
    return (
      <div>
        <NavBar/>
        <div className="main-container">
          { this.getCategory() }
          <div className="container mt-4 category-container">
            <div className="row">
                { this.displayItems() }
              </div>
          </div>
        </div>
      </div>
    )
  }
}
