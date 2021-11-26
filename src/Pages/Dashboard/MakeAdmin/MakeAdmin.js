import React from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const MakeAdmin = () => {
  const [databaseUser, setDatabaseUser] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const makeAdmin = (id) => {
    axios
      .put(`https://morning-dawn-48580.herokuapp.com/${id}`, {
        id: id,
      })
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          //   window.location.reload();
          axios
            .get('https://morning-dawn-48580.herokuapp.com/users')
            .then((res) => {
              setDatabaseUser(res.data);
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      });
  };
  React.useEffect(() => {
    axios
      .get('https://morning-dawn-48580.herokuapp.com/users')
      .then((res) => {
        setDatabaseUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">
        All <span className="text-danger">Users</span>
      </h1>
      {isLoading ? (
        <div className="text-center">
          {' '}
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div>
          <Table responsive="sm">
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
                {/* <th>Table heading</th> */}
              </tr>
            </thead>
            <tbody>
              {databaseUser.map((user, index) => {
                // console.log(user);
                // console.log(index);
                return (
                  <tr key={user._id} className="text-center">
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      {user.role ? (
                        <span className="text-info">{user.role}</span>
                      ) : (
                        'user'
                      )}
                    </td>

                    <td>
                      <Button
                        onClick={() => makeAdmin(user._id)}
                        variant="outline-danger"
                      >
                        Make Admin
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
