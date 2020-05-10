import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Table from 'react-bootstrap/Table';

export default class Sizeguide extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <div className="main-container">
        <div className="container mt-4 category-container">
          <div className="row">
              <h2>Size Guide</h2>
              
              <h4>How do I Measure?</h4>

              <h5><b>Bust</b></h5>
              <p>Measure the bust around the body at the most outward part just below the armpit.</p>
              <h5><b>Waist</b></h5>
              <p>Measure the waist around the natural waistline tightly. Bend one side to find the natural crease.</p>
              <h5><b>Hip</b></h5>
              <p>Measure around the body at the widest point of the hipline.</p>
          </div>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Delivery Method</th>
                <th>Delivery Cost</th>
                <th>Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard - Card payment checkout</td>
                <td>FREE</td>
                <td>3 to 5 working days</td>
              </tr>
              <tr>
                <td>Standard FREE delivery Over Rs. 4500</td>
                <td>FREE</td>
                <td>3 to 5 working days</td>
              </tr>
              <tr>
                <td>Cash on delivery (delivery charges+ COD processing fee)</td>
                <td>FREE</td>
                <td>3 to 5 working days</td>
              </tr>
              <tr>
                <td>Cash on delivery over Rs.4500 (FREE delivery, COD processing fee only)</td>
                <td>FREE</td>
                <td>3 to 5 working days</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      </div>
    )
  }
}
