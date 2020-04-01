import React, {Component}from 'react';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
             <h4 className="text-center mt-4">Contact Us</h4>
             <ul className="text-center mt-5">
               <li><i className="fa fa-phone"></i> (011) 4 222 333</li>
               <li><i className="fa fa-envelope"></i> cskpfashion@gmail.com</li>
               <li><i className="fa fa-map"></i> 400, main street, Hikkaduwa</li>
             </ul>
            </div>
            <div className="col-md-4 cus-service">
             <h4 className="text-center mt-4">Customer Services</h4>
             <ul className="text-center mt-5">
               <li>Delivery</li>
               <li>Size Giude</li>
               <li>About us</li>
             </ul>
            </div>
            <div className="col-md-4">
              <div className="text-center mt-4">
                <h4 className="text-center mb-5">Follw Us</h4>
                 <i className="fab fa-facebook fa-3x ml-4"></i>
                 <i className="fab fa-twitter fa-3x ml-4"></i>
                 <i className="fab fa-instagram fa-3x ml-4"></i>
              </div>
            </div>
          </div>
        </div>
       <p className="text-center Copyright">Copyright &copy; 2020 | CSKP Fashion Store (AF | SLIIT)</p>
      </div>
        )
      }
    }
