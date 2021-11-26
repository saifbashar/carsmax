import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const AddProducts = () => {
  const { user } = useAuth();

  // console.log(user);
  const email = user?.email;

  const url = `https://morning-dawn-48580.herokuapp.com/users/${email}`;
  const [databaseUser, setDatabaseUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatabaseUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [url]);
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const newData = { ...data };
    axios
      .post('https://morning-dawn-48580.herokuapp.com/cars', newData)
      .then((res) => {
        if (res.data.insertedId) {
          swal('Congratulation', 'Inserted a new Car', 'success');
          reset();
          history.push('/explore');
        }
      });
    // console.log(data);
  };
  return (
    <div className="h-100 w-100">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="">
          {' '}
          {databaseUser[0]?.role ? (
            <div className="w-50 mx-auto">
              {' '}
              <h1 className="text-center">
                Add a new <span className="text-danger">Cars</span>
              </h1>
              <div className="mt-3 mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  Cars Name
                  <br></br>
                  <input
                    className="w-100"
                    {...register('name', { required: true })}
                  />
                  <br></br>
                  {/* include validation with required or other standard HTML validation rules */}
                  Description
                  <br></br>
                  <input
                    className="w-100"
                    {...register('description', { required: true })}
                  />
                  <br></br>
                  Image
                  <br></br>
                  <input
                    className="w-100"
                    {...register('image', { required: true })}
                  />
                  <br></br>
                  Price
                  <br></br>
                  <input
                    className="w-100"
                    {...register('price', { required: true })}
                  />
                  <br></br>
                  Mileage
                  <br></br>
                  <input
                    className="w-100"
                    {...register('mileage', { required: true })}
                  />
                  <br></br>
                  Band
                  <br></br>
                  <input
                    className="w-100"
                    {...register('band', { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br></br>
                  <div className="text-center mt-3">
                    {' '}
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <h1>
                You are not <span className="text-danger">Authorized</span>
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddProducts;
