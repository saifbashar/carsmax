import React from 'react';
import axios from 'axios';
// import DashboardHeader from '../DashboardHeader/DashboardHeader';
// import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
const Review = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post('https://morning-dawn-48580.herokuapp.com/reviews', data)
      .then((response) => {
        // console.log(response);
        if (response.data.insertedId) {
          //   alert('Review Submitted Successfully');
          swal(
            'Congratulation!',
            `Review post Successfully inserted`,
            'success'
          );
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    reset();
  };
  return (
    <div style={{ height: '90vh' }} className="d-flex align-items-center">
      {/* <DashboardHeader /> */}
      <div
        style={{ width: '50rem', border: '1px solid' }}
        className="mx-auto p-3 py-5 shadow-lg  bg-body rounded"
      >
        <div>
          <h3 className="fw-bold">
            Add Your <span className="text-danger">Review</span>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            Your Name:
            <br></br>
            <input
              defaultValue={user.displayName}
              placeholder="Enter your name:"
              type="text"
              className="w-100"
              {...register('name')}
            />
            <br></br>
            Your Email:
            <br></br>
            <input
              defaultValue={user.email}
              placeholder="Enter your email:"
              type="text"
              className="w-100"
              {...register('email')}
            />
            <br></br>
            {/* include validation with required or other standard HTML validation rules */}
            Review Points(out of 5)
            <br></br>
            <input
              {...register('reviewPoints', { required: true })}
              className="w-100"
              type="number"
            />
            <br />
            Your Text / Quote: <br></br>
            <textarea
              placeholder=""
              type="text"
              {...register('quotes')}
              className="w-100"
            />
            <br></br>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
