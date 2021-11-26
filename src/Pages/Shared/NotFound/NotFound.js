// Import Section
import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import img from '../../../images/404.jpg';

const NotFound = () => {
  // Not Found Page
  return (
    <Row className="container ">
      <Col sm={12} md={6} lg={6}>
        <Image src={img} className="img-fluid"></Image>
      </Col>
      <Col
        sm={12}
        md={6}
        lg={6}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <h1 className="fw-bold">AWWW...DON’T CRY.</h1>
          <p>It's just a 404 Error! </p>
          <p>
            What you’re looking for may have been misplaced in Long Term Memory.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
