// import axios from 'axios';
import React from 'react';
import { Col, Row, Form, Image, Container, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = React.useState({});
  const { registerUser, error, isLoading } = useAuth();

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
  console.log(location);
  const history = useHistory();
  const handleSubmit = (event) => {
    // console.log('Hit the form');
    // console.log(loginData);
    if (loginData.password !== loginData.confirmPassword) {
      swal('Error', 'Passwords do not match', 'error');
      return;
      //   swal('Good job!', 'You clicked the button!', 'error');
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

    // if (!error) {
    //   console.log(user.email);
    //   axios
    //     .post('http://localhost:5000/users', {
    //       email: loginData.email,
    //       name: loginData.name,
    //       password: loginData.password,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((er) => {
    //       console.log(er);
    //     });
    // }

    event.preventDefault();
  };
  return (
    <Container className="mt-2 text-center">
      <h2>
        Register<span className="text-danger"> Page</span>
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
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  onBlur={handleOnChange}
                  name="name"
                  placeholder="Name"
                />
              </Col>
            </Form.Group>
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
                  onBlur={handleOnChange}
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
                  onBlur={handleOnChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextConfirmPassword"
            >
              <Form.Label column sm="2">
                Confirm Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onBlur={handleOnChange}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            {isLoading && <Spinner animation="border" variant="primary" />}
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary mx-2">
              Sign Up
            </button>
            <br></br>
            <span>Already have an account?</span>
            <Link to="login">Log In</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
