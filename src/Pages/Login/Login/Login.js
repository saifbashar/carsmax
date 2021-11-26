import React from 'react';
import './Login.css';
import { Col, Row, Form, Image, Container, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = React.useState({});
  const { loginUser, error, isLoading } = useAuth();
  // console.log(error);
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [field]: value });
    // console.log(field, value);
  };
  //   console.log(loginData);
  //   console.log(loginData);
  const location = useLocation();
  const history = useHistory();
  const handleSubmit = (event) => {
    // console.log('Hit the form');

    loginUser(loginData.email, loginData.password, location, history);

    event.preventDefault();
  };

  return (
    <Container className="mt-2 text-center ">
      <h2 className="text-center">
        Login <span className="text-danger">Page</span>
      </h2>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Image
            src="https://i.ibb.co/MG8rzGz/pexels-luis-quintero-3892894.jpg"
            fluid
            className="vh-100  vw-100"
          />
        </Col>
        <Col className="d-flex align-items-center" sm={12} md={6} lg={6}>
          <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  onChange={handleOnChange}
                  name="email"
                  placeholder="Email"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            {isLoading && (
              <span>
                <Spinner animation="border" variant="primary" />
              </span>
            )}
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary mx-2">
              Login
            </button>
            <br></br>
            <span>Don't have an account? </span>
            <Link style={{ textDecoration: 'none' }} to="register">
              Sign Up
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
