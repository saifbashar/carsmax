import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card, Container } from 'react-bootstrap';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ShopType = () => {
  return (
    <Container>
      <h3 className="fw-bold">
        Shop by <span className="text-danger">type</span>
      </h3>
      <Carousel responsive={responsive}>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/sport-utilities.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">SUV'S</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/pickup-trucks.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Trucks</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/crossovers.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Crossovers</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/sport-utilities.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Sedans</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/sport-utilities.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Coupes</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/sport-utilities.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Convertibles</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ border: '0px', width: '15rem' }}>
            <Card.Img
              variant="top"
              className="img-fluid"
              src="https://www.carmax.com/cars/images/type-icons/sport-utilities.svg"
            />
            <Card.Body>
              <Card.Title className="text-center">Luxury</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Carousel>
    </Container>
  );
};

export default ShopType;
