import React, {Component}from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class DisplayCards extends Component {
  constructor(props) {
      super(props);
      this.state = {  }
      console.log(this.props);
  }

  method() {
  return    <Link to={'/description'}>
          <Card  className="mr-4" style={{ width: '18rem' }}>
            <Link to='/description'><Card.Img variant="top" src={`http://localhost:5000/${ this.props.obj.images[0]} `} alt="No Preview"/></Link>
            <Card.Body>
              <Card.Title className="text-center">{ this.props.obj.DressCode }</Card.Title>
              <Card.Text  className="text-center">Rs. { this.props.obj.DressPrice }.00</Card.Text>
              <Button variant="dark" className="mb-2" block><i class="fas fa-shopping-cart mr-2"/> Add to Cart</Button>
              <Button variant="outline-dark" className="mb-2" block><i class="fas fa-heart mr-2"/> Add to Wishlist</Button>
            </Card.Body>
          </Card>
        </Link>

  }

render() {

return (
  <div>
    {this.method()}
  </div>
  )
  }
}
