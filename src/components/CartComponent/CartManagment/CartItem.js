import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default (props) => (
  <Card className="mr-4" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.Image} />
    <Card.Body>
      <Card.Title className="text-center">{props.DressType}</Card.Title>
      <Card.Text className="text-center">{props.DressPrice}</Card.Text>
      <Card.Text className="text-center">{props.Discount}</Card.Text>
      <div>
        <Button
          variant="dark"
          className="mb-2"
          block
          onClick={props.IncrementQuantity}
        >
          <i class="fas fa-shopping-cart mr-2" />
          Add
        </Button>
        <Card.Text className="text-center">{props.Quantity}</Card.Text>
        <Button
          variant="dark"
          className="mb-2"
          block
          onClick={props.DecrementQuantity}
        >
          <i class="fas fa-shopping-cart mr-2" />
          deduct
        </Button>
      </div>

      <Button
        variant="outline-dark"
        className="mb-2"
        block
        onClick={props.RemoveItem}
      >
        <i class="fas fa-heart mr-2" />
        Remove Product
      </Button>
    </Card.Body>
  </Card>
);
