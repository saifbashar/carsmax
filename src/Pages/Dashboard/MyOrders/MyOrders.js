import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Loader from 'react-loader-spinner';

import { Table, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
const MyOrders = () => {
  const { user } = useAuth();

  // console.log(user.uid);
  const url = `https://morning-dawn-48580.herokuapp.com/orders/${user.email}`;
  const [myOrders, setMyOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get(url).then((res) => {
      setMyOrders(res.data);
      setIsLoading(false);
    });
  }, [url]);
  const cancel = (id) => {
    if (window.confirm('Are you sure you want to cancel?')) {
      axios
        .delete(`https://morning-dawn-48580.herokuapp.com/orders/${id}`)
        .then((res) => {
          swal('Order Cancelled', 'Order Cancelled Successfully', 'success');
        });

      const remainingService = myOrders.filter((order) => order._id !== id);
      setMyOrders(remainingService);
    }
  };

  return (
    <div style={{ backgroundColor: '#F1F5F9' }} className="mt-5 text-center">
      {/* <DashboardHeader /> */}
      {isLoading ? (
        <div className="text-center">
          {' '}
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div>
          <h2 className="fw-bold">
            Your<span className="text-danger"> Ordered </span>Cars
          </h2>
          <p>You can cancel this orders before it becomes Pending.</p>
          <div className="container">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Ordered Image</th>
                  <th>Ordered Name</th>
                  <th>Status</th>
                  <th>Action</th>
                  {/* <th>Table heading</th> */}
                </tr>
              </thead>
              <tbody>
                {myOrders.map((user, index) => {
                  // console.log(user);
                  // console.log(index);
                  return (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>
                        {' '}
                        <Image
                          src={user.carImage}
                          style={{ width: '100px', height: '100px' }}
                        ></Image>
                      </td>
                      <td>{user.carName}</td>

                      <td>{user.status}</td>

                      {user.status === 'Shipped' ? (
                        <td>Done</td>
                      ) : (
                        <td>
                          <Button
                            onClick={() => cancel(user._id)}
                            variant="outline-danger"
                          >
                            Cancel Order
                          </Button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
