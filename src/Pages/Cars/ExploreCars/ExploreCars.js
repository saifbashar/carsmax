import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreCar from '../ExploreCar/ExploreCar';
import Loader from 'react-loader-spinner';

import axios from 'axios';
const ExploreCars = () => {
  const [cars, setCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://morning-dawn-48580.herokuapp.com/cars').then((res) => {
      setCars(res.data);
      setIsLoading(false);
    });
  }, []);
  // console.log(cars.data);
  return (
    <div>
      <h1 className="text-center">
        Explore <span className="text-danger"> Cars</span>
      </h1>
      {isLoading ? (
        <div className="text-center">
          {' '}
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <Container>
          <Row className="g-3">
            {cars.map((car) => (
              <ExploreCar key={car._id} car={car}></ExploreCar>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ExploreCars;
