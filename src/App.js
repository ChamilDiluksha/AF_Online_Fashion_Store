import React, {Component}from 'react';
import './App.css';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6">Column 6</div>
        <div className="col-md-6">Column 6</div>
        <a href="#" className="btn">Shop Now <i class="fas fa-chevron-right"></i></a>
      </div>

    
    </div>
    );
  }
}

export default App;
