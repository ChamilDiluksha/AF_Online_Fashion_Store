import React, { Component } from "react";
import axios from "axios";

import { Image, Statistic } from "semantic-ui-react";
import { Button } from "react-bootstrap";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <td>
          <Image src={`http://localhost:5000/${this.props.obj.DressImage}`} />

          <span>{this.props.obj.DressCode}</span>
        </td>
        <td>{this.props.obj.OrderId}</td>
        <td>{this.props.obj.Description}</td>
        <td>{this.props.obj.Quantity}</td>
        <td>{this.props.obj.DressPrice}</td>
        <td>{this.props.obj.Total}</td>
        <td>
          <Button>Comment</Button>
        </td>
      </tr>
    );
  }
}

export default Orders;
