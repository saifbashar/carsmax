import React from 'react';
import axios from 'axios';
import { Container, Row, Spinner } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import useAuth from '../../../hooks/useAuth';

const ReviewSection = () => {
  const [allReviews, setAllReviews] = React.useState([]);
  const { isLoading } = useAuth();
  // console.log(isLoading);
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/reviews')
      .then((res) => {
        setAllReviews(res.data);
      });
  }, []);

  return (
    <div
      className="text-center pt-3 pb-5"
      style={{ backgroundColor: '#F7F7F7' }}
    >
      {' '}
      <h1>
        Review <span className="text-danger">Section</span>
      </h1>
      <h6>Thousands of customers happiness</h6>
      {!isLoading && (
        <>
          <Container>
            <Row className="g-2">
              {allReviews.map((review) => (
                <SingleReview review={review} key={review._id} />
              ))}
            </Row>
          </Container>
        </>
      )}
      {isLoading && <Spinner animation="border" variant="primary" />}
    </div>
  );
};

export default ReviewSection;
