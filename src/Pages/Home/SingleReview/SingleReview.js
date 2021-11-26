import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatings from 'react-star-ratings';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SingleReview = ({ review }) => {
  const { name, quotes, reviewPoints } = review;
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="h-100 p-3 shadow">
        <div className="d-flex justify-content-around">
          <div>
            <h6>
              {' '}
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ color: 'blue' }}
              />{' '}
              {name}
              <br></br>
              <span className="text-muted">Customer</span>
            </h6>
          </div>
          <StarRatings
            rating={parseInt(reviewPoints)}
            starRatedColor="blue"
            numberOfStars={5}
            starDimension="10px"
            name="rating"
          />
        </div>
        <Card.Body as="div">
          <p>"{quotes}"</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleReview;
