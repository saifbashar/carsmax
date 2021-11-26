import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div className="pt-5 mt-5 pb-2 bg-footer ">
      <div className="container">
        {' '}
        <h1 className="text-white">CarMax</h1>
        <div>
          <Row className="row-cols-1">
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Home
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Blog
              </a>
            </Col>
            <Col>
              {' '}
              <a href="#home" className="text-decoration-none text-blue">
                Buy Local Car
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                Car Type
              </a>
            </Col>
            <Col>
              <a href="#home" className="text-decoration-none text-blue">
                About Us
              </a>
            </Col>
          </Row>

          <p className="text-white">
            Request for Buy: <span className="text-blue">01704938941</span>
          </p>
          <p className="text-white text-center">
            © Copyright 2020 All rights reserved - Designed By{' '}
            <span className="text-danger">Saif Bashar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
