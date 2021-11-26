import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
const ManageOrder = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  const [error, setError] = React.useState(null);
  console.log(error);
  const { user } = useAuth();
  // console.log(error);
  // console.log(user);
  const email = user?.email;

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  const [databaseUser, setDatabaseUser] = React.useState({});
  React.useEffect(() => {
    axios(url)
      .then((res) => {
        setDatabaseUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  // console.log(databaseUser);
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/orders')
      .then((res) => {
        setOrders(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  const cancel = (id) => {
    // console.log(id);
    axios
      .delete(`https://morning-dawn-48580.herokuapp.com/orders/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          swal('Order Cancelled', 'Order Cancelled Successfully', 'success');

          const remainingService = orders.filter((order) => order._id !== id);
          setOrders(remainingService);
        }
      });
  };
  const confirm = (id) => {
    axios
      .post(`https://morning-dawn-48580.herokuapp.com/orders/${id}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.matchedCount) {
          swal('Order Shipped', 'Order Shipped Successfully', 'success');
          axios
            .get(`https://morning-dawn-48580.herokuapp.com/orders`)
            .then((res) => setOrders(res.data));
        }
      });
  };
  return (
    <div>
      <h1 className="text-center">
        Manage <span className="text-danger">Orders</span>
      </h1>
      {isLoading ? (
        <div className="text-center">
          {' '}
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div>
      ) : databaseUser[0]?.role ? (
        <div>
          <div>
            <div className="container">
              <Table responsive="sm">
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Ordered By</th>
                    <th>Product Name</th>
                    <th>Status</th>
                    <th>Action</th>
                    {/* <th>Table heading</th> */}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => {
                    //   console.log(order);
                    //   console.log(index);
                    return (
                      <tr key={order._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.carName}</td>

                        <td>{order.status}</td>

                        <td>
                          <Button
                            onClick={() => cancel(order._id)}
                            variant="outline-danger"
                          >
                            Cancel Order
                          </Button>
                          {order?.status !== 'Shipped' && (
                            <Button
                              onClick={() => confirm(order._id)}
                              variant="outline-primary"
                              className="mx-2"
                            >
                              Confirm
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center">You are not authorized to see this</h2>
        </div>
      )}
    </div>
  );
};

export default ManageOrder;
