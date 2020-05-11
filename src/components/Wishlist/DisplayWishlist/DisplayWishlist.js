import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../Home/HomeStyle.css';
import Cookies from "universal-cookie";
import category1 from'../images/category1.jpg';

class DisplayWishlist extends Component {
    constructor(props) {
        const cookies = new Cookies();
        let user = cookies.get('user');
        super(props);

        this.state = {
            user: user,
            Subtype: '',
            Images: [],
            Wishlist: []
        }

        this.renderCards = this.renderCards.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/wishlist/display')
            .then(response => {
                this.setState({ Wishlist: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    deleteItem = (e) => {
      e.preventDefault();

      console.log('Delete');

      axios.delete('http://localhost:5000/wishlist/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
          .catch(err => console.log(err));

      alert('Wishlist Item Deleted..!');
      window.location.href = "/wishlist";
    }

    renderCards() {
      if (this.state.user) {
        const userId = this.state.user.userId;

        if (this.props.obj.UserId == userId) {
          return (<Card  className="mr-4 mb-4 wishlist-card" style={{ width: '18rem' }}>
            <Link to='/description'><Card.Img variant="top" src={`http://localhost:5000/${this.props.obj.Images[0]}`} /></Link>
            <Card.Body>
              <Card.Title className="text-center">{this.props.obj.Subtype}</Card.Title>
              <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
              <Button variant="outline-dark" onClick={this.deleteItem} className="mb-2" block><i class="fas fa-trash mr-2"/> Remove from Wishlist</Button>
            </Card.Body>
          </Card>
        );
        }
      }
      else {
        alert('Please Log In..!');
        window.location.href = "/sign-in";
      }  
    }

  render() {

    return (
      <div>
        {this.renderCards()}
      </div>
    );
  }
}

export default DisplayWishlist;