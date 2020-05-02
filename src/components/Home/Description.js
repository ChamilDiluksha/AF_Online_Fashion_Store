import React, { Component } from 'react';
import axios from 'axios';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';
import Cookies from "universal-cookie";
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import { Comment, Header, Rating } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import RatingStar from './Ratings/ratings';
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
      productid: '',
      Quantity: 0
    }

    this.clickDecrement = this.clickDecrement.bind(this);
    this.clickIncrement = this.clickIncrement.bind(this);
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
              Image: response.data.images,
              Quantity: 0
            });
        })
          .catch(function (error) {
            console.log(error);
          })


  }

  clickWhishList() {
    window.location.href = "/wishlist";
  }

  clickDecrement() {
    let quentity = this.state.Quantity;

    if (quentity > 0) {
      quentity = quentity - 1;
    }

    this.setState({ Quantity: quentity})
  }

  clickIncrement() {
    let quentity = this.state.Quantity;

    quentity = quentity + 1;

    this.setState({ Quantity: quentity})
  }

  getState() {
    console.log(this.state);
  }
  render() {

    return (
      <div>
        <NavBar/>
        <div className="main-container">
          <div className="container mt-4 category-container">
            <div className="row">
              <div className="col-md-6">
              <Card  className="mr-4 product-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:5000/${this.state.Image[0]}`} />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Rs. {this.state.DressPrice}.00</h2></Card.Title>
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-6">
                <h1 className="page-header ml-4 text-center">{this.state.Subtype}</h1>
                <ul className="mt-5">
                  <li><b>Dress Code : </b>{this.state.DressCode}</li>
                  <li><b>Price : </b>Rs. {this.state.DressPrice}.00</li>
                  <li><b>Type : </b>{this.state.DressType}</li>
                  <li><b>Subtype : </b>{this.state.Subtype}</li>
                  <li><b>Description : </b>{this.state.Description}</li>
                </ul>
                <div className="text-center mt-4 mb-4">
                <label >Select Quentity</label><br/>
                  <Button variant="outline-dark" className="mr-3" onClick={this.clickDecrement}>-</Button><Button variant="outline-dark" className="mr-3">{this.state.Quantity}</Button><Button variant="outline-dark" onClick={this.clickIncrement}>+</Button>
                </div>
                <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
                <Button variant="outline-dark" onClick={this.clickWhishList} className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
              </div>
            </div>

            <div class="ui comments">
              <h3 className="page-header mt-5">Review & Comments..</h3>
              <div class="comment">
                <div class="avatar"><img src="/images/avatar/small/matt.jpg" /></div>
                <div class="content">
                  <h3 class="author">Matt</h3>
                  <div class="metadata"><h6>Today at 5:42PM</h6></div>
                  <div class="text"><h5>How artistic!</h5></div>
                </div>
                <RatingStar/>
                <hr/>
              </div>
              <div class="comment">
                <div class="avatar"><img src="/images/avatar/small/matt.jpg" /></div>
                <div class="content">
                  <h3 class="author">Matt</h3>
                  <div class="metadata"><h6>Today at 5:42PM</h6></div>
                  <div class="text"><h5>How artistic!</h5></div>
                </div>
                <RatingStar/>
                <hr/>
              </div>
              <div class="comment">
                <div class="avatar"><img src="/images/avatar/small/matt.jpg" /></div>
                <div class="content">
                  <h3 class="author">Matt</h3>
                  <div class="metadata"><h6>Today at 5:42PM</h6></div>
                  <div class="text"><h5>How artistic!</h5></div>
                </div>
                <RatingStar/>
                <hr/>
              </div>
              <div class="comment">
                <div class="avatar"><img src="/images/avatar/small/matt.jpg" /></div>
                <div class="content">
                  <h3 class="author">Matt</h3>
                  <div class="metadata"><h6>Today at 5:42PM</h6></div>
                  <div class="text"><h5>How artistic!</h5></div>
                </div>
                {this.getState()}
                <RatingStar/>
                <hr/>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
