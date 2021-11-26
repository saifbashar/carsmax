import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Bounce from 'react-reveal/Bounce';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeCar = ({ car }) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //   console.log(car);
  return (
    <Col sm={12} md={6} lg={4}>
      <Card data-aos="fade-right" className="h-100  shadow">
        <Card.Img variant="top" src={car.image} />
        <Card.Body>
          <Card.Title>
            <span className="fw-bold">{car.name}</span>
          </Card.Title>
          <Card.Text>{car.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="w-100 p-0">
          <Link to={`/placeOrder/${car._id}`}>
            <Button className="w-100" variant="outline-dark">
              Purchase
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default HomeCar;
