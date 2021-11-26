import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Navbar, Container, NavLink, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  //   console.log(useAuth());
  const { user, logout } = useAuth();

  // console.log(user);
  const email = user?.email;

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  const [databaseUser, setDatabaseUser] = useState({});
  useEffect(() => {
    axios(url)
      .then((res) => {
        setDatabaseUser(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [url]);
  // console.log(databaseUser);
  // console.log(uid);
  return (
    <div style={{ backgroundColor: '#EFF4F5' }}>
      <Navbar expand="lg">
        <Container>
          <NavLink className="text-decoration-none" to="/">
            {' '}
            <Navbar.Brand>
              <img
                src="https://www.pngitem.com/pimgs/m/352-3525731_car-range-icon-header-emblem-hd-png-download.png"
                width="50"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span className=" ms-2 text-danger">
                Cars<span className="text-danger">Max</span>
              </span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link m-auto px-2" to="/">
                <Button variant="outline-dark border-0 ">Home</Button>
              </Link>
              <Link className="link m-auto px-2" to="/explore">
                <Button variant="outline-dark border-0 ">Explore</Button>
              </Link>
              {user?.email && (
                <Link className="link m-auto px-2" to="/dashboard">
                  <Button variant="outline-dark border-0 ">Dashboard</Button>
                </Link>
              )}

              <Link className="link m-auto px-2" to="/about">
                <Button variant="outline-dark border-0 ">About</Button>
              </Link>
              {!user.email && (
                <Link className="link m-auto px-2" to="/login">
                  <Button variant="outline-dark border-0 ">Login</Button>
                </Link>
              )}
              {databaseUser[0]?.email && (
                <span className="">{databaseUser[0]?.name}</span>
              )}
              {user?.email && (
                <Button onClick={logout} variant="border-0 w-100">
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

export default Header;
