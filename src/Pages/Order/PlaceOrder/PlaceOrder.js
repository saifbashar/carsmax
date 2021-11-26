import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Row, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
// import ReactLoading from 'react-loading';
import Loader from 'react-loader-spinner';

const PlaceOrder = () => {
  const history = useHistory();
  const { user } = useAuth();

  // console.log(user);
  // console.log(useAuth());
  const [loading, setLoading] = React.useState(true);
  // console.log(user);
  const { id } = useParams();
  const url = `https://morning-dawn-48580.herokuapp.com/cars/${id}`;
  const [cars, setCars] = React.useState([]);
  React.useEffect(() => {
    axios.get(url).then((res) => {
      setCars(res.data);
      setLoading(false);
    });
  }, [url]);
  // console.log(cars);
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // console.log(user.uid);
    // console.log(user);
    const newData = {
      ...data,
      carId: id,
      status: 'pending',
      name: user.displayName,
      email: user.email,
      carName: cars[0]?.name,
      carPrice: cars[0]?.price,
      carImage: cars[0]?.image,
    };
    axios
      .post('https://morning-dawn-48580.herokuapp.com/orders', newData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          swal('Order Placed Successfully', '', 'success');
          reset();
          history.push('/dashboard');
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // console.log(user);

  //   console.log(useParams());
  //   console.log(id);

  //   console.log(cars);
  return (
    <div className="container mb-4">
      {loading ? (
        <div className="h-100">
          {' '}
          <div className="d-flex justify-content-center align-items-center">
            {' '}
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-center">
              Place <span className="text-danger">Order</span>
            </h1>
            <Row>
              <Col>
                <Card className="border-0">
                  <Card.Img variant="top" src={cars[0]?.image} />
                  <Card.Body>
                    <Card.Title>
                      <h2 className="fw-bold"> {cars[0]?.name}</h2>
                      <br></br>
                      <small className="text-muted">
                        Mileage: {cars[0]?.mileage}
                      </small>
                      <br />
                      <div className="d-flex justify-content-between align-items-center">
                        {' '}
                        <div>
                          {' '}
                          <small className="text-muted">{cars[0]?.brand}</small>
                        </div>
                        <div className="border border-3 border-info text-info px-4">
                          {cars[0]?.price}$
                        </div>
                      </div>
                    </Card.Title>

                    <Card.Text>{cars[0]?.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0"></Card.Footer>
                </Card>
              </Col>
              <Col className="">
                <div className="border p-2 shadow py-4">
                  <h4>
                    Fill the form below<br></br> with some explanation below
                  </h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    Your Name:
                    <br></br>
                    {<span className="text-danger">{user?.displayName}</span>}
                    {/* <input
                defaultValue={user?.displayName}
                type="text"
                className="w-100"
                {...register('name')}
              /> */}
                    <br></br>
                    Your Email:
                    <br></br>
                    {/* <input
                defaultValue={user?.email}
                type="text"
                className="w-100"
                {...register('email')}
              /> */}
                    {<span className="text-danger">{user?.email}</span>}
                    <br></br>
                    {/* include validation with required or other standard HTML validation rules */}
                    Phone
                    <br></br>
                    <input
                      {...register('phone', { required: true })}
                      className="w-100"
                      type="number"
                    />
                    <br />
                    Your Address <br></br>
                    <textarea
                      placeholder=""
                      type="text"
                      {...register('address')}
                      className="w-100"
                    />
                    <br></br>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <input type="submit" />
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
