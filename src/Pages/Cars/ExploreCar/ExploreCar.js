import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ExploreCar = (props) => {
  const { name, description, image, _id } = props.car;
  // console.log(props);
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="h-100 p-0">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="w-100 p-0">
          <Link to={`/placeOrder/${_id}`}>
            <Button className="w-100" variant="outline-dark">
              Purchase
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ExploreCar;
