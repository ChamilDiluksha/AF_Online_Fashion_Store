import React, {Component}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/AdminDashboard/AdminHandler';
import Login from './components/Login';


class App extends Component {

  render() {
    return (
      <div>
      <Login />
    <Admin />
    </div>
    );
  }
}

export default App;
