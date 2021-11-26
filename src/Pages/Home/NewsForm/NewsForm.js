import React from 'react';
import { input } from 'react-bootstrap';
import './NewsForm.css';

const NewsForm = () => {
  return (
    <div className="w-100   container d-flex justify-content-center align-items-center">
      <div className="w-75 py-5 rounded text-center newsform">
        <h1>Get our latest News and Special sales!</h1>
        <p>
          Join us for the latest Cars news, including special offers, events,
          collaborations and new arrivals.
        </p>
        <div className="input-group mb-3 w-75 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
          ></input>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
