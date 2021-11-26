// import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   UserCard,
//   FlippingCard,
//   FlippingCardBack,
//   FlippingCardFront,
// } from 'react-ui-cards';
import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

// Navbar,
// Offcanvas,
// Nav,
// NavDropdown,
// Button,
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
// import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Dashboard = () => {
  const { user } = useAuth();

  // console.log(user);
  const email = user?.email;
  // console.log(uid);

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  // console.log(url);
  const [databaseUser, setDatabaseUser] = React.useState({});
  const [order, setOrder] = React.useState([]);
  const [totalUser, setTotalUser] = React.useState([]);
  const [totalCars, setCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [myOrders, setMyOrders] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://morning-dawn-48580.herokuapp.com/orders/${user.email}`)
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [user.email]);

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatabaseUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [url]);
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/orders')
      .then((response) => {
        setOrder(response.data);
      });
  });

  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/users')
      .then((response) => {
        setTotalUser(response.data);
      });
  });
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/cars')
      .then((response) => {
        setCars(response.data);
      });
  });

  const shippedOrder = myOrders.filter((order) => order?.status === 'Shipped');
  // console.log(shippedOrder);
  const pendingOrder = myOrders.filter((order) => order?.status === 'pending');
  // console.log(pendingOrder);
  // console.log(databaseUser);
  return (
    <div className="mt-5">
      <div>
        {isLoading ? (
          <div className="text-center">
            {' '}
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <div>
            <Container>
              <h3 className="text-center">
                Hello{' '}
                <span className="fw-bold text-danger">
                  {databaseUser[0]?.name}
                </span>{' '}
                {databaseUser[0]?.role && <span>(Admin)</span>}
              </h3>
              <Row>
                {!databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: 'yellow' }}
                      className="rounded rounded-3 d-flex align-items-center justify-content-center"
                    >
                      <div>My Orders: {myOrders?.length}</div>
                    </div>
                  </Col>
                )}
                {!databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: 'green' }}
                      className="rounded rounded-3 d-flex align-items-center justify-content-center"
                    >
                      <div>Shipped: {shippedOrder?.length}</div>
                    </div>
                  </Col>
                )}
                {!databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: '#06B6D4' }}
                      className="rounded rounded-3 d-flex align-items-center justify-content-center"
                    >
                      <div>Pending: {pendingOrder?.length}</div>
                    </div>
                  </Col>
                )}

                {databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: 'yellow' }}
                      className="rounded rounded-3 d-flex align-items-center justify-content-center"
                    >
                      <div>Total Order: {order?.length}</div>
                    </div>
                  </Col>
                )}

                {databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: 'green' }}
                      className="rounded rounded-3 d-flex align-items-center justify-content-center"
                    >
                      <div>Total User: {totalUser?.length}</div>
                    </div>
                  </Col>
                )}
                {databaseUser[0]?.role && (
                  <Col sm={12} md={4} lg={4}>
                    <div
                      style={{ height: '100px', backgroundColor: '#06B6D4' }}
                      className="rounded rounded-3  d-flex align-items-center text-white justify-content-center"
                    >
                      <div>Total Products: {totalCars?.length}</div>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
