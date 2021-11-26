// import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar, NavLink, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../../hooks/useAuth';

const DashboardHeader = () => {
  const { user, logout } = useAuth();

  // console.log(user);
  const email = user?.email;

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  const [databaseUser, setDatabaseUser] = React.useState({});
  React.useEffect(() => {
    axios(url)
      .then((res) => {
        setDatabaseUser(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [url]);
  return (
    <div style={{ backgroundColor: '#EFF4F5' }}>
      <Navbar expand="lg">
        <Container>
          <NavLink className="text-decoration-none" to="/">
            {' '}
            <Navbar.Brand>
              <span className=" ms-2 ">Dashboard</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link m-auto px-2" to="/">
                <Button variant="outline-dark border-0 ">Home</Button>
              </Link>
              <Link className="link m-auto px-2" to="/dashboard">
                <Button variant="outline-dark border-0 ">Dashboard</Button>
              </Link>
              {!databaseUser[0]?.role && (
                <Link className="link" to="/dashboard/myOrders">
                  <Button variant=" border-0 ">My Orders</Button>
                </Link>
              )}
              {!databaseUser[0]?.role && (
                <Link className="link text-center" to="/dashboard/pay">
                  <Button variant=" border-0 ">Pay</Button>
                </Link>
              )}

              {!databaseUser[0]?.role && (
                <Link className="link text-center" to="/dashboard/review">
                  <Button variant=" border-0 ">Review</Button>
                </Link>
              )}

              {/* Admin */}

              {databaseUser[0]?.role && (
                <Link className="link text-center" to="/dashboard/manageOrder">
                  <Button variant=" border-0 ">Manage All Orders</Button>
                </Link>
              )}
              {databaseUser[0]?.role && (
                <Link className="link text-center" to="/dashboard/addProduct">
                  <Button variant=" border-0 ">Add a Product</Button>
                </Link>
              )}
              {databaseUser[0]?.role && (
                <Link className="link text-center" to="/dashboard/makeAdmin">
                  <Button variant=" border-0 ">Make Admin</Button>
                </Link>
              )}
              {databaseUser[0]?.role && (
                <Link
                  className="link text-center"
                  to="/dashboard/manageProducts"
                >
                  <Button variant=" border-0 ">Manage Products</Button>
                </Link>
              )}

              {user?.email && (
                <Button onClick={logout} variant="border-0">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardHeader;
