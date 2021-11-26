import React from 'react';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';
import HomeCar from '../HomeCar/HomeCar';

const HomeCars = () => {
  const [cars, setCars] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/cars?search=6')
      .then((res) => {
        setCars(res.data);
      });
  }, []);

  // console.log(cars);
  return (
    <div style={{ backgroundColor: '#F7F7F7' }} className="py-4">
      <Container>
        <div className="text-center">
          {' '}
          <h1>
            Our cars <span className="text-danger">near</span> you
          </h1>
          <p>
            Experiencing the car while shopping in the showroom, ordering at
            home via an app, and picking it up at the dealership later.
          </p>
          <Row className="g-3">
            {cars.map((car) => (
              <HomeCar car={car} key={car._id} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomeCars;
