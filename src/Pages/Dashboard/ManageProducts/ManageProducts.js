import React from 'react';
import axios from 'axios';
// import ReactLoading from 'react-loading';
import Loader from 'react-loader-spinner';
import { Container, Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
const ManageProducts = () => {
  const { user } = useAuth();

  // console.log(user);
  const email = user?.email;

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  const [databaseUser, setDatabaseUser] = React.useState({});
  const [cars, setCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/cars')
      .then((response) => {
        setCars(response.data);
        axios.get(url).then((response) => {
          setDatabaseUser(response.data);
          setIsLoading(false);
        });
      });
  });
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // console.log('Inside Loop');
      axios
        .delete(`https://morning-dawn-48580.herokuapp.com/cars/${id}`, id)
        .then((res) => {
          // console.log(res);
          if (res.data.deletedCount) {
            // alert('Successfully deleted.');
            swal('Deleted Successfully', `Congratulations`, 'success');

            const remainingService = cars.filter((order) => order._id !== id);
            setCars(remainingService);
          }
        });
    }
    // console.log(id);
  };

  // console.log(cars);
  return (
    <div>
      {isLoading ? (
        <div className="text-center">
          {/* <ReactLoading type={type} color={color} height={667} width={375} /> */}
          {/* <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> */}
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div>
      ) : databaseUser[0]?.role ? (
        <div>
          <h1 className="text-center">
            Manage <span className="text-danger">Products</span>
          </h1>
          <Container>
            <Row className="g-3">
              {cars.map((car) => (
                <ManageProduct
                  key={car._id}
                  car={car}
                  handleDelete={handleDelete}
                ></ManageProduct>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-danger">
            You are not authorized to see this
          </h1>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
