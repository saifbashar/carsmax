import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { Card, Row, Col, Container } from 'react-bootstrap';
const Trending = () => {
  return (
    <div>
      <h1 className="text-center py-5">Trending now</h1>
      <Container>
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://content-images.carmax.com/qeontfmijmzv/2545014wd-vs-awd-edmundsheroabstract/a828b90242be0837596f4a88da23120e/2545014wd-vs-awd-edmundsheroabstract.jpg"
              />
              <Card.Body as="div">
                <Card.Title>AWD vs. 4WD: What's the difference?</Card.Title>
                <Card.Text>
                  At one time, if you wanted a vehicle with four driven wheels,
                  you were limited to just a handful of large trucks and
                  full-size SUVs, most of which were used for work chores or
                  off-road adventure. But times have changed. Now, many vehicles
                  sold in the U.S. are available with either all-wheel drive
                  (AWD) or four-wheel drive (4WD), making them more capable and
                  more desirable to a wider audience.
                </Card.Text>

                <div className="text-center">
                  {' '}
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.carmax.com/articles/awd-vs-4wd-which-to-choose"
                  >
                    See more
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            {' '}
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://content-images.carmax.com/qeontfmijmzv/49801-how-to-sell-your-car-abstract-319x180/149f21daee59b278517710db002212b3/49801-how-to-sell-your-car-abstract-319x180.jpg"
              />
              <Card.Body as="div">
                <Card.Title>How to sell your cars</Card.Title>
                <Card.Text>
                  If you’re looking to sell your car, you’ve got options beyond
                  trading in or selling your car privately. Getting an appraisal
                  from CarMax is quick and easy! Last year, we bought more than
                  650,000 cars, trucks, and SUVs. We’ve heard from customers
                  that private car sales can take longer than selling a car to
                  CarMax. There are challenges like price negotiations and some
                  prospective buyers want owners.
                </Card.Text>

                <div className="text-center">
                  {' '}
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.carmax.com/articles/how-to-sell-your-car"
                  >
                    See more
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 56 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            {' '}
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://content-images.carmax.com/qeontfmijmzv/6rawEjgy2NdIwVqe2jMXSG/11a3b2eb264a12abc81e8013f0172aad/407001_10BestDieselSUVsfor2021-abstract_2x.jpg"
              />
              <Card.Body as="div">
                <Card.Title>10 Best Diesel SUVs for 2021: Ranked</Card.Title>
                <Card.Text>
                  When you want a sport-utility vehicle to haul the family (dog
                  included!) or a weekend's worth of camping gear, consider a
                  diesel-powered SUV. The deep growl of a diesel engine paired
                  with its characteristic fuel-sipping qualities and ample
                  torque make these rides enjoyable for any adventure on your
                  calendar, from rural winter driving to highway-bound road
                  trips. To help you on your search, we've compiled a list of
                  the 10 best diesel SUVs for 2021 shoppers, based on CarMax
                </Card.Text>

                <div className="text-center">
                  {' '}
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.carmax.com/articles/best-diesel-suvs-ranking"
                  >
                    See more
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 33 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            {' '}
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://content-images.carmax.com/qeontfmijmzv/Cm2wLpT7kt9fmC7IvXNDD/4fd63b667e040ae825c366f8dc8afc20/417005_ShouldIBuyAHybridSUV-Hero-abstract.jpg"
              />
              <Card.Body as="div">
                <Card.Title>Should I Buy a Hybrid SUV?</Card.Title>
                <Card.Text>
                  If you're thinking about switching to alternative fuel, you
                  might be wondering if a hybrid SUV is a good choice. Or maybe
                  you're ready for your next SUV and are considering making the
                  switch to a hybrid to maximize mpg. The great news is you've
                  got plenty of options. A used hybrid SUV checks a lot of
                  boxes, from cargo space to punchy powertrains to comfort for
                  road trips.
                </Card.Text>

                <div className="text-center">
                  {' '}
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.carmax.com/articles/should-you-buy-hybrid-suv"
                  >
                    See more
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 34 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
