import React from 'react';
// import axios from 'axios';
import { Col, Card, Button } from 'react-bootstrap';
const ManageProduct = (props) => {
  const { name, description, image, _id } = props.car;
  const { handleDelete } = props;
  //   console.log(handleDelete);

  //   console.log(props);

  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="h-100 p-0">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <span className="fw-bold">{name}</span>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="w-100 p-0">
          <Button
            className="w-100"
            variant="outline-danger"
            onClick={() => {
              handleDelete(_id);
            }}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageProduct;
